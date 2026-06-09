import React from 'react'
function Hero() {
  return (
    <section
      style={{
        padding: "120px 20px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          color: "#B08D57",
          letterSpacing: "4px",
          textTransform: "uppercase",
        }}
      >
        Community
      </p>

      <h1
        style={{
          fontSize: "72px",
          margin: "20px 0",
        }}
      >
        Stories, Poetry &
        Thoughts
      </h1>

      <p
        style={{
          maxWidth: "700px",
          margin: "auto",
          color: "#999",
        }}
      >
        A place where words live beyond fashion.
      </p>
    </section>
  );
}

export default Hero;


