// src/App.jsx
import { THEME } from "./config";
import { themes } from "./themes/themes";
import { useLenis } from "./hooks/useLenis";
import { SplitLayout } from "./components/layout/SplitLayout";
import { SingleLayout } from "./components/layout/SingleLayout";
import { HomeSection } from "./components/sections/HomeSection";
import { AboutSection } from "./components/sections/AboutSection";
import { SkillsSection } from "./components/sections/SkillsSection";
import { EducationSection } from "./components/sections/EducationSection";
import { ContactSection } from "./components/sections/ContactSection";

// ── All page sections in order ────────────────────────────────
// To add a section: create it in /sections, import it, add it here.
const Sections = () => (
  <>
    <HomeSection />
    <AboutSection />
    <SkillsSection />
    <EducationSection />
    <ContactSection />
  </>
);

// ── Layout registry ──────────────────────────────────────────
const layoutRegistry = {
  split: SplitLayout,
  single: SingleLayout,
};

const App = () => {
  useLenis();

  const activeTheme = themes[THEME] ?? themes.codeman;
  const Layout = layoutRegistry[activeTheme.layout.type] ?? SplitLayout;

  return (
    <Layout>
      <Sections />
    </Layout>
  );
};

export default App;
