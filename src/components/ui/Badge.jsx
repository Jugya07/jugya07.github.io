// src/components/ui/Badge.jsx
export const Badge = ({ children, href }) => {
  const style = {
    display: "inline-block",
    fontFamily: "var(--font-mono)",
    fontSize: "11px",
    padding: "3px 9px",
    borderRadius: "4px",
    background: "var(--badgeBg)",
    color: "var(--badgeText)",
    marginRight: "6px",
    marginBottom: "4px",
    textDecoration: "none",
    whiteSpace: "nowrap",
  };

  return href ? (
    <a href={href} target="_blank" rel="noreferrer" style={style}>
      {children}
    </a>
  ) : (
    <span style={style}>{children}</span>
  );
};
