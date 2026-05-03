// src/components/ui/Divider.jsx
export const Divider = ({ style = {} }) => (
  <hr
    style={{
      border: "none",
      borderTop: "1px solid var(--contentBorder)",
      margin: "2.5rem 0",
      ...style,
    }}
  />
);
