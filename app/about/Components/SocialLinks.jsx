import React from "react";

function SocialLinks() {
  return (
    <section
      style={{
        padding: "100px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "42px",
          marginBottom: "40px",
        }}
      >
        Connect With Us
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h3>Instagram</h3>
          <p style={{ color: "#999" }}>
            @inkandthread
          </p>
        </div>

        <div>
          <h3>Email</h3>
          <p style={{ color: "#999" }}>
            hello@inkandthread.com
          </p>
        </div>

        <div>
          <h3>Community</h3>
          <p style={{ color: "#999" }}>
            Join Our Writers Circle
          </p>
        </div>
      </div>
    </section>
  );
}

export default SocialLinks;