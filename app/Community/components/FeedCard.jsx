import React from "react";

function FeedCard({ item, handleLike, handleDelete, }) {
  return (
    <div
      style={{
        border: "1px solid #333",
        padding: "20px",
        marginBottom: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>{item.title}</h3>

      <p>{item.content}</p>
      <p>❤️ {item.likes}</p>

      <small>By {item.author}</small>

      <button
        onClick={() => handleLike(item._id)}
      >
        ❤️ {item.likes}
      </button>
      <button
        onClick={() => {
          console.log("BUTTON CLICKED");
          handleDelete(item._id);
        }}
      >
        🗑️ Delete
      </button>
    </div>
  );
}

export default FeedCard;