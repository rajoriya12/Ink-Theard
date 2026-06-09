"use client";

import React, { useState } from "react";
import { refresh } from "aos";



function ContactForm() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await res.json();

      if (data.success) {

        alert("Message Sent Successfully ✅");

        setName("");
        setEmail("");
        setMessage("");

      } else {

        alert(data.message || "Something went wrong");

      }

    } catch (error) {

      console.log(error);

      alert("Server Error ❌");

    }
  };
  return (
    <section
      style={{
        padding: "120px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#B08D57",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          Get In Touch
        </p>

        <h2
          style={{
            fontSize: "48px",
            marginBottom: "50px",
          }}
        >
          Let's Create Something Meaningful
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "18px",
              marginBottom: "20px",
              border: "1px solid #333",
              background: "transparent",
              color: "white",
            }}
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "18px",
              marginBottom: "20px",
              border: "1px solid #333",
              background: "transparent",
              color: "white",
            }}
          />

          <textarea
            placeholder="Your Message"
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              width: "100%",
              padding: "18px",
              marginBottom: "30px",
              border: "1px solid #333",
              background: "transparent",
              color: "white",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "15px 40px",
              background: "#B08D57",
              border: "none",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
}

export default ContactForm;