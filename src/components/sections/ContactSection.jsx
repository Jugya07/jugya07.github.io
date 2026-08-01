// src/components/sections/ContactSection.jsx
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PERSONAL, LINKS } from "../../config";
import { useGsapReveal } from "../../hooks/useGsapReveal";
import { SectionHeading } from "../ui/SectionHeading";
import { resolveIcon } from "../../utils/icons";

// No backend, no third-party service to go quiet on — mailto: just opens
// the visitor's own mail client, pre-addressed.
const MAIL_HREF = `mailto:${PERSONAL.email}?subject=${encodeURIComponent(
  "Hey — from your portfolio",
)}`;

const CHANNELS = [
  { key: "linkedin", label: "LinkedIn", handle: PERSONAL.name, href: LINKS.linkedin, icon: "faLinkedin" },
  { key: "instagram", label: "Instagram", handle: "@jugya__kamal07", href: LINKS.instagram, icon: "faInstagram" },
  { key: "facebook", label: "Facebook", handle: "@zhang.jike.311", href: LINKS.facebook, icon: "faFacebook" },
];

const ChannelCard = ({ label, handle, href, icon }) => (
  <a
    data-animate
    data-hover-lift
    data-magnetic
    href={href}
    target="_blank"
    rel="noreferrer"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "0.85rem",
      padding: "1.1rem",
      border: "1px solid var(--cardBorder)",
      borderRadius: "6px",
      background: "var(--cardBg)",
      textDecoration: "none",
      transition: "border-color 0.2s",
    }}
    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--cardBorderHover)")}
    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--cardBorder)")}
  >
    <span
      style={{
        width: "38px",
        height: "38px",
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid var(--contentBorder)",
        borderRadius: "6px",
        color: "var(--accent)",
        fontSize: "15px",
      }}
    >
      <FontAwesomeIcon icon={resolveIcon(icon)} />
    </span>
    <span style={{ minWidth: 0 }}>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          color: "var(--contentMuted)",
          letterSpacing: "0.06em",
          marginBottom: "2px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "14px",
          color: "var(--contentText)",
          fontWeight: 500,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {handle}
      </div>
    </span>
    <span
      style={{
        marginLeft: "auto",
        fontFamily: "var(--font-mono)",
        fontSize: "13px",
        color: "var(--contentMuted)",
        flexShrink: 0,
      }}
    >
      ↗
    </span>
  </a>
);

export const ContactSection = () => {
  const sectionRef = useRef(null);
  const [copied, setCopied] = useState(false);
  useGsapReveal(sectionRef, { stagger: 0.07 });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "3.25rem 3rem",
      }}
    >
      <div data-animate>
        <SectionHeading>contact</SectionHeading>
      </div>
      <div
        data-animate
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "var(--contentMuted)",
          marginBottom: "1.75rem",
          marginTop: "2px",
        }}
      >
        ~/contact
      </div>

      <p
        data-animate
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "1.05rem",
          color: "var(--contentText)",
          lineHeight: 1.8,
          maxWidth: "560px",
          marginBottom: "2rem",
        }}
      >
        Reach out — I read everything and reply when I can. Email's fastest, but pick whatever's easiest for you.
      </p>

      {/* Featured email panel — not itself a link; two explicit actions below */}
      <div
        data-animate
        style={{
          padding: "1.5rem",
          marginBottom: "1.25rem",
          maxWidth: "560px",
          borderRadius: "6px",
          border: "1px solid var(--accent)",
          background:
            "linear-gradient(145deg, var(--cardBg), color-mix(in srgb, var(--cardBg) 86%, var(--accent) 14%))",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.1rem",
            flexWrap: "wrap",
            marginBottom: "1.35rem",
          }}
        >
          <span
            style={{
              width: "46px",
              height: "46px",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              border: "1px solid var(--accent)",
              color: "var(--accent)",
              fontSize: "18px",
            }}
          >
            <FontAwesomeIcon icon={resolveIcon("faEnvelope")} />
          </span>
          <span style={{ flex: "1 1 220px", minWidth: 0 }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--contentMuted)",
                letterSpacing: "0.06em",
                marginBottom: "3px",
              }}
            >
              EMAIL
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "1.05rem",
                color: "var(--contentText)",
                fontWeight: 500,
                wordBreak: "break-all",
              }}
            >
              {PERSONAL.email}
            </div>
          </span>
        </div>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <a
            data-hover-lift
            data-magnetic
            href={MAIL_HREF}
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
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accentBg)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            send a message →
          </a>
          <button
            data-hover-lift
            data-magnetic
            type="button"
            onClick={handleCopy}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              padding: "10px 20px",
              borderRadius: "4px",
              border: "1px solid var(--contentBorder)",
              color: copied ? "var(--accent)" : "var(--contentMuted)",
              background: "transparent",
              cursor: "pointer",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              if (copied) return;
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              if (copied) return;
              e.currentTarget.style.borderColor = "var(--contentBorder)";
              e.currentTarget.style.color = "var(--contentMuted)";
            }}
          >
            {copied ? "copied ✓" : "copy email"}
          </button>
        </div>
      </div>

      {/* Other channels */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "0.85rem",
          maxWidth: "760px",
        }}
      >
        {CHANNELS.map((channel) => (
          <ChannelCard key={channel.key} {...channel} />
        ))}
      </div>
    </section>
  );
};
