// src/themes/ThemeContext.jsx
import { createContext, useContext, useEffect } from "react";
import { THEME } from "../config";
import { themes } from "./themes";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const theme = themes[THEME] ?? themes.codeman;

  useEffect(() => {
    const existing = document.getElementById("portfolio-fonts");
    if (existing) return;
    const link = document.createElement("link");
    link.id = "portfolio-fonts";
    link.rel = "stylesheet";
    link.href = theme.fonts.googleFonts;
    document.head.appendChild(link);
  }, [theme.fonts.googleFonts]);

  useEffect(() => {
    const root = document.documentElement;
    const { colors, fonts } = theme;
    Object.entries(colors).forEach(([k, v]) =>
      root.style.setProperty(`--${k}`, v),
    );
    root.style.setProperty("--font-heading", fonts.heading);
    root.style.setProperty("--font-body", fonts.body);
    root.style.setProperty("--font-prose", fonts.prose); // ← new
    root.style.setProperty("--font-mono", fonts.mono);
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
};
