import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PERSONAL } from "../../config";

const STATUS_LINES = [
  "> booting portfolio",
  "> loading interface",
  "> ready",
];

export const BootLoader = ({ onDone }) => {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (prefersReducedMotion) {
      const reducedTimer = window.setTimeout(() => {
        document.body.style.overflow = previousOverflow;
        onDone();
      }, 180);

      return () => {
        window.clearTimeout(reducedTimer);
        document.body.style.overflow = previousOverflow;
      };
    }

    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray(".boot-loader__line");
      const progressBar = root.querySelector(".boot-loader__progress-fill");

      gsap.set(lines, { autoAlpha: 0, y: 8 });
      gsap.set(".boot-loader__signature", { autoAlpha: 0, y: 12 });
      gsap.set(progressBar, { scaleX: 0, transformOrigin: "left center" });

      const timeline = gsap.timeline({
        defaults: { ease: "power2.out" },
        onComplete: () => {
          document.body.style.overflow = previousOverflow;
          onDone();
        },
      });

      timeline
        .to(".boot-loader__signature", {
          autoAlpha: 1,
          y: 0,
          duration: 0.38,
        })
        .to(
          lines,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.22,
            stagger: 0.18,
          },
          "-=0.1",
        )
        .to(
          progressBar,
          {
            scaleX: 1,
            duration: 0.9,
            ease: "power1.inOut",
          },
          "-=0.45",
        )
        .to(root, {
          autoAlpha: 0,
          duration: 0.45,
          delay: 0.16,
        });
    }, root);

    return () => {
      document.body.style.overflow = previousOverflow;
      ctx.revert();
    };
  }, [onDone]);

  return (
    <div ref={rootRef} className="boot-loader" aria-live="polite">
      <div className="boot-loader__panel">
        <div className="boot-loader__signature">{PERSONAL.initials}</div>
        <div className="boot-loader__lines">
          {STATUS_LINES.map((line) => (
            <p key={line} className="boot-loader__line">
              {line}
            </p>
          ))}
        </div>
        <div className="boot-loader__progress" aria-hidden="true">
          <span className="boot-loader__progress-fill" />
        </div>
      </div>
    </div>
  );
};
