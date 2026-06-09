function Sidebar({
  poetryCount,
  storyCount,
}) {
  return (
    <div
      style={{
        border: "1px solid #333",
        padding: "20px",
      }}
    >
      <h3>Your Library</h3>

      <p>
        Poetry Written : {poetryCount}
      </p>

      <p>
        Stories Written : {storyCount}
      </p>

      <button>
        + Add Poetry
      </button>

      <br />
      <br />

      <button>
        + Add Story
      </button>
    </div>
  );
}

export default Sidebar;