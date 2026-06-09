import React from "react";

function Tabs({ activeTab, setActiveTab }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        marginBottom: "20px",
      }}
    >
      <button
        onClick={() => setActiveTab("poetry")}
      >
        Poetry
      </button>

      <button
        onClick={() => setActiveTab("story")}
      >
        Stories
      </button>
    </div>
  );
}

export default Tabs;