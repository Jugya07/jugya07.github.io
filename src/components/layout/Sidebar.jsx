// src/components/layout/Sidebar.jsx
import { PERSONAL, NAV_ITEMS, LINKS } from "../../config";
import { scrollToSection } from "../../utils/scroll";
import { SocialHandle } from "../ui/SocialHandle";

export const Sidebar = ({ activeSection, sidebarWidth }) => {
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
      {/* Logo */}
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "1.1rem", fontWeight: 700, color: "var(--sidebarLogo)", marginBottom: "0.25rem", letterSpacing: "0.05em" }}>
        {PERSONAL.initials}
      </div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--sidebarText)", marginBottom: "2rem", letterSpacing: "0.04em" }}>
        ~/portfolio
      </div>

      {/* Nav */}
      <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {NAV_ITEMS.map(({ label, sectionId }) => {
          const isActive = activeSection === sectionId;
          return (
            <button
              key={sectionId}
              onClick={() => scrollToSection(sectionId)}
              style={{
                background:   isActive ? "rgba(104,224,207,0.06)" : "none",
                border:       "none",
                cursor:       "pointer",
                textAlign:    "left",
                fontFamily:   "var(--font-mono)",
                fontSize:     "12px",
                padding:      "6px 8px",
                borderRadius: "4px",
                color:        isActive ? "var(--sidebarActive)" : "var(--sidebarText)",
                transition:   "color 0.2s, background 0.2s",
                display:      "flex",
                alignItems:   "center",
                gap:          "8px",
              }}
              onMouseEnter={e => {
                if (!isActive) e.currentTarget.style.color = "var(--sidebarActive)";
              }}
              onMouseLeave={e => {
                if (!isActive) e.currentTarget.style.color = "var(--sidebarText)";
              }}
            >
              <span style={{ color: isActive ? "var(--sidebarActive)" : "var(--sidebarBorder)", fontSize: "10px" }}>
                {isActive ? "→" : "·"}
              </span>
              {label}
            </button>
          );
        })}
      </nav>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Socials */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "1rem" }}>
        <SocialHandle href={LINKS.github}    iconKey="faGithub" />
        <SocialHandle href={LINKS.linkedin}  iconKey="faLinkedin" />
        <SocialHandle href={LINKS.instagram} iconKey="faInstagram" />
        <SocialHandle href={LINKS.facebook}  iconKey="faFacebook" />
      </div>

      {/* Resume */}
      <a
        href={LINKS.resume}
        target="_blank"
        rel="noreferrer"
        style={{
          fontFamily:     "var(--font-mono)",
          fontSize:       "11px",
          color:          "var(--sidebarActive)",
          textDecoration: "none",
          border:         "1px solid var(--sidebarActive)",
          padding:        "6px 10px",
          borderRadius:   "4px",
          textAlign:      "center",
          transition:     "background 0.2s",
        }}
        onMouseEnter={e => e.currentTarget.style.background = "rgba(104,224,207,0.08)"}
        onMouseLeave={e => e.currentTarget.style.background = "transparent"}
      >
        resume ↗
      </a>
    </aside>
  );
};
