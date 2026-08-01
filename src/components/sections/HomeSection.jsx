// src/components/sections/HomeSection.jsx
import { useLayoutEffect, useRef } from "react";
import Typed from "react-typed";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PERSONAL, LINKS } from "../../config";
import { useGsapReveal } from "../../hooks/useGsapReveal";

gsap.registerPlugin(ScrollTrigger);

export const HomeSection = () => {
  const sectionRef = useRef(null);
  const avatarRef = useRef(null);
  useGsapReveal(sectionRef, { start: "top 80%", stagger: 0.1, y: 32 });

  // Avatar lags behind + shrinks as the hero scrolls out of view. Scoped to
  // ~0.65 of a viewport height so it resolves while the avatar is still on
  // screen, rather than smearing across the whole (much taller) section.
  useLayoutEffect(() => {
    const avatar = avatarRef.current;
    const section = sectionRef.current;
    if (!avatar || !section) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      // Horizontal centering lives on xPercent so the scrub tween's own y can
      // stack on top without fighting a static CSS transform. Vertically the
      // photo is anchored to the wrapper's bottom edge (see JSX) so all of
      // its extra height spills upward, not centered/downward.
      gsap.set(avatar, { xPercent: -50 });
      gsap.to(avatar, {
        y: 90,
        scale: 0.86,
        opacity: 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${Math.round(window.innerHeight * 0.65)}`,
          scrub: 0.5,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "3.25rem 3rem",
        borderBottom: "1px solid var(--contentBorder)",
      }}
    >
    {/* Breadcrumb */}
    <div
      data-animate
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "13px",
        color: "var(--contentMuted)",
        marginBottom: "1.75rem",
      }}
    >
      ~/home
    </div>

    {/* Photo + name */}
    <div
      data-animate
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1.5rem",
        flexWrap: "wrap",
        marginTop: "3rem", // clears the photo's upward overflow from the breadcrumb above it
        marginBottom: "1.75rem",
      }}
    >
      {/* Wrapper reserves the layout slot at the ring's size. The photo sits
          underneath, rendered larger and centered, so it visibly spills past
          the ring drawn on top of it — instead of the two just scaling
          together as one bigger circle. */}
      <div
        style={{
          position: "relative",
          width: "clamp(110px, 14vw, 148px)",
          height: "clamp(110px, 14vw, 148px)",
          flexShrink: 0,
        }}
      >
        <img
          ref={avatarRef}
          src={PERSONAL.image}
          alt={PERSONAL.name}
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            width: "148%",
            height: "148%",
            borderRadius: "50%",
            objectFit: "cover",
          }}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>
      <div>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.85rem, 4vw, 2.75rem)",
            fontWeight: 700,
            color: "var(--contentText)",
            margin: 0,
            lineHeight: 1.15,
            letterSpacing: "0.02em",
          }}
        >
          {PERSONAL.name}
        </h1>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "15px",
            color: "var(--accent)",
            marginTop: "8px",
            minHeight: "22px",
          }}
        >
          <Typed
            strings={PERSONAL.taglines}
            typeSpeed={55}
            backSpeed={35}
            loop
          />
        </div>
      </div>
    </div>

    {/* Bio — uses prose font */}
    <p
      data-animate
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "1.14rem",
        // fontStyle: "italic",
        color: "var(--contentText)",
        lineHeight: 1.85,
        maxWidth: "600px",
        marginBottom: "1.75rem",
        letterSpacing: "0.01em",
      }}
    >
      {PERSONAL.bio}
    </p>

    {/* CTAs */}
    <div data-animate style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <a
        data-hover-lift
        data-magnetic
        href={LINKS.github}
        target="_blank"
        rel="noreferrer"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          padding: "10px 20px",
          borderRadius: "4px",
          border: "1px solid var(--accent)",
          color: "var(--accent)",
          textDecoration: "none",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "var(--accentBg)")
        }
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        github ↗
      </a>
      <a
        data-hover-lift
        data-magnetic
        href={LINKS.resume}
        target="_blank"
        rel="noreferrer"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          padding: "10px 20px",
          borderRadius: "4px",
          border: "1px solid var(--contentBorder)",
          color: "var(--contentMuted)",
          textDecoration: "none",
          transition: "border-color 0.2s, color 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--accent)";
          e.currentTarget.style.color = "var(--accent)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--contentBorder)";
          e.currentTarget.style.color = "var(--contentMuted)";
        }}
      >
        resume ↗
      </a>
    </div>
  </section>
  );
};
