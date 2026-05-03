// src/hooks/useScrollSpy.js
import { useState, useEffect, useRef } from "react";
import { lenisInstance } from "./useLenis";

export const useScrollSpy = (sectionIds) => {
  const [activeId, setActiveId] = useState(sectionIds[0]);
  const activeRef = useRef(sectionIds[0]);

  useEffect(() => {
    // Uses Lenis scroll position if available, falls back to window.scrollY
    const compute = (scrollY) => {
      const sy = scrollY ?? window.scrollY;
      const mid = sy + window.innerHeight / 2;

      let closest = sectionIds[0];
      let closestDist = Infinity;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        // offsetTop is layout position — unaffected by Lenis transform
        const elMid = el.offsetTop + el.offsetHeight / 2;
        const dist = Math.abs(mid - elMid);
        if (dist < closestDist) {
          closestDist = dist;
          closest = id;
        }
      }

      if (closest !== activeRef.current) {
        activeRef.current = closest;
        setActiveId(closest);
      }
    };

    // Subscribe to Lenis scroll events (fires on every animated frame)
    let unsubLenis;
    const tryLenis = () => {
      if (lenisInstance) {
        unsubLenis = lenisInstance.on("scroll", ({ scroll }) => compute(scroll));
      } else {
        // Lenis not ready yet, try again shortly
        setTimeout(tryLenis, 100);
      }
    };
    tryLenis();

    // Native scroll as fallback
    const onScroll = () => compute(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });

    compute(); // initial

    return () => {
      unsubLenis?.();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return activeId;
};
