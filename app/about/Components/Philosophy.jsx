import React from 'react'

function Philosophy() {
  return (
    <section
      style={{
        padding: "100px 20px",
        margin:'30px'
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "48px",
          marginBottom: "60px",
        }}
      >
        Brand Philosophy
      </h2>

      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "30px",
          paddingBottom:"30px"
        }}
      >
        <div
          style={{
            border: "1px solid #333",
            padding: "40px",
            textAlign: "center",
          }}
        >
          <h3>🎭 Identity</h3>

          <p style={{ color: "#999" }}>
            Fashion should reflect who you are,
            not who trends ask you to be.
          </p>
        </div>

        <div
          style={{
            border: "1px solid #333",
            padding: "40px",
            textAlign: "center",
            
          }}
        >
          <h3>❤️ Emotion</h3>

          <p style={{ color: "#999" }}>
            Every thread carries memories,
            feelings and personal meaning.
          </p>
        </div>

        <div
          style={{
            border: "1px solid #333",
            padding: "40px",
            textAlign: "center",
          }}
        >
          <h3>📖 Storytelling</h3>

          <p style={{ color: "#999" }}>
            Clothing is more than fabric.
            It is a story waiting to be told.
          </p>
        </div>
      </div>
      <hr />
    </section>
  );
}

export default Philosophy;


