import React from "react";

function LookbookGallery() {
  return (
    <section
      style={{
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        <img
          src="/hero.jpeg"
          alt=""
          style={{
            width: "100%",
            height: "650px",
            objectFit: "cover",
          }}
        />

        <img
          src="/C1.jpeg"
          alt=""
          style={{
            width: "100%",
            height: "650px",
            objectFit: "cover",
          }}
        />

        <img
          src="/C2.jpeg"
          alt=""
          style={{
            width: "100%",
            height: "650px",
            objectFit: "cover",
          }}
        />

        <img
          src="/C3.jpeg"
          alt=""
          style={{
            width: "100%",
            height: "650px",
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
}

export default LookbookGallery;