// src/hooks/useEmailJS.js
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS } from "../config";

/**
 * Returns { send, status }
 * status: "idle" | "sending" | "success" | "error"
 */
export const useEmailJS = () => {
  const [status, setStatus] = useState("idle");

  const send = async ({ name, email, message }) => {
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        { name, email, message },
        EMAILJS.publicKey,
      );
      setStatus("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return { send, status };
};
