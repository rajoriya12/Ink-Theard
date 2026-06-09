import React from "react";

function Philosophy() {
  const items = [
    {
      icon: "🎭",
      title: "Identity",
      description:
        "Fashion should reflect who you are, not who trends ask you to be.",
    },
    {
      icon: "❤️",
      title: "Emotion",
      description:
        "Every thread carries memories, feelings and personal meaning.",
    },
    {
      icon: "📖",
      title: "Storytelling",
      description:
        "Clothing is more than fabric. It is a story waiting to be told.",
    },
  ];

  return (
    <section
      style={{
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          <p
            style={{
              color: "#b08d57",
              textTransform: "uppercase",
              letterSpacing: "4px",
              fontSize: "14px",
              marginBottom: "15px",
            }}
          >
            Our Values
          </p>

          <h2
            style={{
              fontSize: "48px",
              fontWeight: "300",
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            Brand Philosophy
          </h2>

          <div
            style={{
              width: "100px",
              height: "2px",
              background: "#b08d57",
              margin: "0 auto",
            }}
          />
        </div>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: "40px",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 300px",
                maxWidth: "380px",
                background: "#111",
                border: "1px solid #333",
                borderRadius: "32px",
                padding: "40px",
                transition: "0.3s",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  fontSize: "50px",
                  marginBottom: "25px",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontSize: "28px",
                  color: "#fff",
                  marginBottom: "20px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#999",
                  lineHeight: "1.8",
                  fontSize: "16px",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Philosophy;