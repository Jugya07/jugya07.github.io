// src/hooks/useLenis.js
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

// Export lenis instance so useScrollSpy can subscribe to it
export let lenisInstance = null;

export const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis();
    lenisInstance = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
};
