// src/components/sections/ContactSection.jsx
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useEmailJS } from "../../hooks/useEmailJS";
import { useGsapReveal } from "../../hooks/useGsapReveal";
import { SectionHeading } from "../ui/SectionHeading";

const inputStyle = {
  width:        "100%",
  background:   "transparent",
  border:       "1px solid var(--contentBorder)",
  borderRadius: "4px",
  padding:      "11px 13px",
  fontFamily:   "var(--font-body)",
  fontSize:     "15px",
  color:        "var(--contentText)",
  outline:      "none",
  transition:   "border-color 0.2s",
  boxSizing:    "border-box",
};

const labelStyle = {
  fontFamily:    "var(--font-mono)",
  fontSize:      "12px",
  color:         "var(--contentMuted)",
  display:       "block",
  marginBottom:  "6px",
  letterSpacing: "0.05em",
};

export const ContactSection = () => {
  const sectionRef = useRef(null);
  const { send, status } = useEmailJS();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  useGsapReveal(sectionRef, { stagger: 0.07 });

  const onSubmit = async (data) => {
    await send(data);
    if (status !== "error") reset();
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        minHeight:      "100vh",
        display:        "flex",
        flexDirection:  "column",
        justifyContent: "center",
        padding:        "3.25rem 3rem",
      }}
    >
      <div data-animate>
        <SectionHeading>contact</SectionHeading>
      </div>
      <div
        data-animate
        style={{
          fontFamily:   "var(--font-mono)",
          fontSize:     "12px",
          color:        "var(--contentMuted)",
          marginBottom: "1.75rem",
          marginTop:    "2px",
        }}
      >
        ~/contact
      </div>

      <form
        data-animate
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxWidth: "480px", display: "flex", flexDirection: "column", gap: "1.25rem" }}
      >
        {/* Name */}
        <div data-animate>
          <label style={labelStyle}>NAME</label>
          <input
            style={inputStyle}
            placeholder="Your name"
            onFocus={e => e.target.style.borderColor = "var(--accent)"}
            onBlur={e  => e.target.style.borderColor = "var(--contentBorder)"}
            {...register("name", {
              required: "Name is required",
              maxLength: { value: 30, message: "Max 30 characters" },
            })}
          />
          {errors.name && (
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "#e55", marginTop: "4px", display: "block" }}>
              {errors.name.message}
            </span>
          )}
        </div>

        {/* Email */}
        <div data-animate>
          <label style={labelStyle}>EMAIL</label>
          <input
            style={inputStyle}
            type="email"
            placeholder="your@email.com"
            onFocus={e => e.target.style.borderColor = "var(--accent)"}
            onBlur={e  => e.target.style.borderColor = "var(--contentBorder)"}
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
            })}
          />
          {errors.email && (
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "#e55", marginTop: "4px", display: "block" }}>
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Message */}
        <div data-animate>
          <label style={labelStyle}>MESSAGE</label>
          <textarea
            style={{ ...inputStyle, minHeight: "140px", resize: "vertical" }}
            placeholder="Your message..."
            onFocus={e => e.target.style.borderColor = "var(--accent)"}
            onBlur={e  => e.target.style.borderColor = "var(--contentBorder)"}
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "#e55", marginTop: "4px", display: "block" }}>
              {errors.message.message}
            </span>
          )}
        </div>

        {/* Submit */}
        <button
          data-hover-lift
          data-animate
          type="submit"
          disabled={status === "sending"}
          style={{
            alignSelf:    "flex-start",
            fontFamily:   "var(--font-mono)",
            fontSize:     "14px",
            padding:      "11px 24px",
            borderRadius: "4px",
            border:       "1px solid var(--accent)",
            color:        "var(--accent)",
            background:   "transparent",
            cursor:       status === "sending" ? "wait" : "pointer",
            transition:   "background 0.2s",
            opacity:      status === "sending" ? 0.6 : 1,
          }}
          onMouseEnter={e => e.currentTarget.style.background = "var(--accentBg)"}
          onMouseLeave={e => e.currentTarget.style.background = "transparent"}
        >
          {status === "sending" ? "sending..." : "send message →"}
        </button>

        {status === "success" && (
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--accent)" }}>
            ✓ Message sent successfully.
          </p>
        )}
        {status === "error" && (
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#e55" }}>
            ✗ Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  );
};
