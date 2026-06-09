import React from 'react'

function Hero() {
  return (
    <>
     
      <section
        style={{
          padding: "170px 20px",
          textAlign: "center",
        }}
    >
        <hr />
      <p
        style={{
          color: "#B08D57",
          letterSpacing: "4px",
          textTransform: "uppercase",
          paddingTop:'30px'
        }}
      >
        About Ink & Thread
      </p>

      <h1
        style={{
          fontSize: "72px",
          margin: "20px 0",
        }}
      >
        Fashion.
        Poetry.
        Stories.
      </h1>

      <p
        style={{
          maxWidth: "700px",
          margin: "auto",
          color: "#999",
          lineHeight: "1.8",
        }}
      >
        More than clothing.
        A space where stories are worn,
        shared and remembered.
      </p>
    </section>
    </>
  );
}

export default Hero;

