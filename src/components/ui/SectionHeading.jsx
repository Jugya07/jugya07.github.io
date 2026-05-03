// src/components/ui/SectionHeading.jsx
export const SectionHeading = ({ children }) => (
  <h2
    style={{
      fontFamily: "var(--font-mono)",
      fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
      fontWeight: 500,
      color: "var(--accent)",
      marginBottom: "0.25rem",
      letterSpacing: "0.04em",
    }}
  >
    <span style={{ color: "var(--contentMuted)", marginRight: "6px" }}>#</span>
    {children}
  </h2>
);
