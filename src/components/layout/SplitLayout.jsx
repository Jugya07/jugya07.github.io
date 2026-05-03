// src/components/layout/SplitLayout.jsx
import { useCallback, useRef } from "react";
import { useTheme } from "../../themes/ThemeContext";
import { NAV_ITEMS } from "../../config";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";

const sectionIds = NAV_ITEMS.map(n => n.sectionId);

export const SplitLayout = ({ children }) => {
  const theme = useTheme();
  const activeSection = useScrollSpy(sectionIds);
  const mainRef = useRef(null);

  const handlePointerMove = useCallback((event) => {
    const main = mainRef.current;
    if (!main) return;

    const rect = main.getBoundingClientRect();
    main.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
    main.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
  }, []);

  return (
    <>
      <div style={{ display: "flex", minHeight: "100vh", background: "var(--sidebarBg)" }}>
        {/* Sidebar — hidden on mobile via CSS */}
        <div className="sidebar-wrapper">
          <Sidebar
            activeSection={activeSection}
            sidebarWidth={theme.layout.sidebarWidth}
          />
        </div>

        {/* Content panel */}
        <main
          ref={mainRef}
          className="ambient-screen"
          onPointerMove={handlePointerMove}
          style={{
            flex:       1,
            overflowX:  "hidden",
            color:      "var(--contentText)",
            fontFamily: "var(--font-body)",
          }}
        >
          {children}
        </main>
      </div>

      {/* Mobile nav */}
      <div className="mobile-nav-wrapper">
        <MobileNav activeSection={activeSection} />
      </div>
    </>
  );
};
