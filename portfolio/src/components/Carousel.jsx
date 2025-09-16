import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",   // Replace with your Service ID
        "your_template_id",  // Replace with your Template ID
        form.current,
        "your_public_key"    // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("✅ Message sent! I’ll get back to you soon.");
          form.current.reset(); // clear form after sending
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("❌ Oops! Something went wrong. Please try again.");
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
        <p style={{ marginTop: "10px", color: "#944e77" }}>
          {statusMessage}
        </p>
      )}
    </div>
  );
}
