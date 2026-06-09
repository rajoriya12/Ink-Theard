import React from "react";

function ContactForm() {
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

        <form>
          <input
            type="text"
            placeholder="Your Name"
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