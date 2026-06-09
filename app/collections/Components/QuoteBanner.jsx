import React from 'react'

function QuoteBanner() {
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
        <h2
          style={{
            fontSize: "60px",
            fontWeight: "700",
            lineHeight: "1.3",
          }}
        >
          "We Wear The Stories
          <br />
          We Survived."
        </h2>

        <p
          style={{
            color: "#B08D57",
            marginTop: "30px",
            letterSpacing: "4px",
          }}
        >
          INK & THREAD
        </p>
      </div>
    </section>
  );
}

export default QuoteBanner;


