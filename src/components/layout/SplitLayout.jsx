// src/components/layout/SplitLayout.jsx
import { useTheme } from "../../themes/ThemeContext";
import { NAV_ITEMS } from "../../config";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { Sidebar } from "./Sidebar";
import { MobileNav } from "./MobileNav";

const sectionIds = NAV_ITEMS.map(n => n.sectionId);

export const SplitLayout = ({ children }) => {
  const theme = useTheme();
  const activeSection = useScrollSpy(sectionIds);

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
          style={{
            flex:       1,
            overflowX:  "hidden",
            background: "var(--contentBg)",
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
