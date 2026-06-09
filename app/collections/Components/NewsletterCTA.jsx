import React from "react";

function Newsletter() {
  return (
    <section
      style={{
        padding: "100px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "48px",
          marginBottom: "20px",
        }}
      >
        Join The Ink & Thread Circle
      </h2>

      <p
        style={{
          color: "#999",
          maxWidth: "600px",
          margin: "0 auto 40px",
        }}
      >
        Be the first to discover new collections,
        exclusive releases and timeless stories.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          style={{
            padding: "15px 20px",
            width: "350px",
            border: "1px solid #333",
            background: "transparent",
            color: "white",
          }}
        />

        <button
          style={{
            padding: "15px 30px",
            background: "#B08D57",
            border: "none",
            cursor: "pointer",
          }}
        >
          Subscribe
        </button>
      </div>
    </section>
  );
}

export default Newsletter;