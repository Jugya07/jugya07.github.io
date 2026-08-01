// src/components/ui/CustomCursor.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

const INTERACTIVE_SELECTOR = "a, button, input, textarea, [data-magnetic]";

export const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reducedMotion) return undefined;

    const dot = dotRef.current;
    const ring = ringRef.current;
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

    const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3" });

    let hasMoved = false;
    let magneticTarget = null;
    let magneticX = null;
    let magneticY = null;

    const handleMouseMove = (event) => {
      if (!hasMoved) {
        hasMoved = true;
        document.documentElement.classList.add("cursor-ready");
      }
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);

      if (magneticTarget) {
        const rect = magneticTarget.getBoundingClientRect();
        magneticX((event.clientX - rect.left - rect.width / 2) * 0.28);
        magneticY((event.clientY - rect.top - rect.height / 2) * 0.35);
      }
    };

    const handleOver = (event) => {
      if (event.target.closest(INTERACTIVE_SELECTOR)) {
        ring.classList.add("is-active");
      }

      const magnetic = event.target.closest("[data-magnetic]");
      if (magnetic && magnetic !== magneticTarget) {
        magneticTarget = magnetic;
        magneticX = gsap.quickTo(magnetic, "x", { duration: 0.35, ease: "power3" });
        magneticY = gsap.quickTo(magnetic, "y", { duration: 0.35, ease: "power3" });
      }
    };

    const handleOut = (event) => {
      const related = event.relatedTarget;

      const target = event.target.closest(INTERACTIVE_SELECTOR);
      if (target && !(related && target.contains(related))) {
        ring.classList.remove("is-active");
      }

      if (
        magneticTarget &&
        event.target.closest("[data-magnetic]") === magneticTarget &&
        !(related && magneticTarget.contains(related))
      ) {
        magneticX(0);
        magneticY(0);
        magneticTarget = null;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      document.documentElement.classList.remove("cursor-ready");
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
};
