import React from "react";

function FounderNote() {
  return (
    <section
      style={{
        padding: "120px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
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
          A Note From The Founder
        </p>

        <h2
          style={{
            fontSize: "48px",
            marginBottom: "40px",
          }}
        >
          More Than Fashion
        </h2>

        <p
          style={{
            color: "#999",
            lineHeight: "1.9",
            fontSize: "18px",
          }}
        >
          Ink & Thread began with a simple belief:
          clothing should tell stories, not just follow trends.
          Every collection, every photograph and every word
          shared through this platform is created with the hope
          of inspiring self-expression and meaningful connections.
        </p>

        <p
          style={{
            marginTop: "30px",
            color: "#B08D57",
            fontSize: "20px",
          }}
        >
          — Founder, Ink & Thread
        </p>
      </div>
    </section>
  );
}

export default FounderNote;