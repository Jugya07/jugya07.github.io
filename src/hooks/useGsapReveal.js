import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapReveal = (scopeRef, options = {}) => {
  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(scope.querySelectorAll("[data-animate]"), {
        clearProps: "all",
      });
      return undefined;
    }

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray("[data-animate]");

      gsap.from(items, {
        autoAlpha: 0,
        y: options.y ?? 26,
        duration: options.duration ?? 0.75,
        ease: options.ease ?? "power3.out",
        stagger: options.stagger ?? 0.08,
        scrollTrigger: {
          trigger: scope,
          start: options.start ?? "top 72%",
          once: true,
        },
      });
    }, scope);

    return () => ctx.revert();
  }, [scopeRef, options.duration, options.ease, options.stagger, options.start, options.y]);
};
