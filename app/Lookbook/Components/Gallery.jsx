import React from "react";

function LookbookGallery() {
  const images = [
    "/hero.jpeg",
    "/c1.jpeg",
    "/c2.jpeg",
    "/c3.jpeg",
  ];

  return (
    <section
      style={{
        padding: "60px 16px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "40px",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Lookbook ${index + 1}`}
            style={{
              width: "100%",
              height: "clamp(320px, 50vw, 650px)",
              objectFit: "cover",
              borderRadius: "12px",
              display: "block",
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default LookbookGallery;