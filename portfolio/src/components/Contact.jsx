import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default function ContactForm() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // "success" or "error"

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_prup5v7",   // Replace with your Service ID
        "template_1e5qosb",  // Replace with your Template ID
        form.current,
        "GXnFLj0XvB5LE92wp"    // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("✅ Message sent! I’ll get back to you soon.");
          setStatusType("success");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("❌ Oops! Something went wrong. Please try again.");
          setStatusType("error");
        }
      );
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send</button>
      </form>

      {/* Status Message */}
      {statusMessage && (
        <p
          style={{
            marginTop: "10px",
            color: statusType === "success" ? "green" : "red",
            fontWeight: "bold",
          }}
        >
          {statusMessage}
        </p>
      )}
    </div>
  );
}
