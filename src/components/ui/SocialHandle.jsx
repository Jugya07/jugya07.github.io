// src/components/ui/SocialHandle.jsx
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { resolveIcon } from "../../utils/icons";

export const SocialHandle = ({ href, iconKey }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return undefined;

    const xTo = gsap.quickTo(el, "x", { duration: 0.15, ease: "power2.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.15, ease: "power2.out" });

    const onMove = (e) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      xTo(e.clientX - (left + width / 2));
      yTo(e.clientY - (top + height / 2));
    };
    const onLeave = () => {
      xTo(0);
      yTo(0);
      gsap.to(el, { scale: 1, rotate: 0, duration: 0.2, ease: "power2.out" });
    };
    const onEnter = () => {
      gsap.to(el, { scale: 1.08, rotate: -3, duration: 0.2, ease: "power2.out" });
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <span className="sidebar-social-item">
      <a
        ref={ref}
        className="sidebar-social-link"
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "40px",
          height: "40px",
          borderRadius: "6px",
          border: "1px solid var(--sidebarBorder)",
          color: "var(--sidebarText)",
          textDecoration: "none",
          transition: "color 0.2s, border-color 0.2s",
          flexShrink: 0,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "var(--sidebarActive)";
          e.currentTarget.style.borderColor = "var(--sidebarActive)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "var(--sidebarText)";
          e.currentTarget.style.borderColor = "var(--sidebarBorder)";
        }}
      >
        <FontAwesomeIcon
          icon={resolveIcon(iconKey)}
          style={{ fontSize: "16px" }}
        />
      </a>
    </span>
  );
};
