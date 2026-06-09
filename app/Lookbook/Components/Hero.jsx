import React from "react";
import Link from "next/link";
function Hero() {
  return (
    <section
      style={{
        padding: "120px 20px",
        textAlign: "center",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <p
        style={{
          color: "#B08D57",
          letterSpacing: "4px",
          textTransform: "uppercase",
          marginBottom: "20px",
          fontSize: "14px",
        }}
      >
        Ink & Thread • Summer Collection 2026
      </p>

      <h1
        style={{
          fontSize: "clamp(48px, 8vw, 90px)",
          fontWeight: "700",
          marginBottom: "24px",
          lineHeight: "1.1",
        }}
      >
        Stories Woven
        <br />
        Into Style
      </h1>

      <p
        style={{
          maxWidth: "750px",
          margin: "0 auto",
          color: "#999",
          lineHeight: "1.8",
          fontSize: "18px",
        }}
      >
        Explore a curated collection inspired by forgotten nights,
        vintage photographs, cinematic moments, and timeless poetry.
        Every frame captures the emotion, craftsmanship, and identity
        behind Ink & Thread.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <Link href="/collections" className="retro-btn">
              Explore Collection
            </Link>

      </div>
    </section>
  );
}

export default Hero;