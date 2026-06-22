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
      <div className="flex gap-5" style={{
        padding:'20px',
        margin:'10px'
      }}>
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
    </div>
  );
}

export default FeedCard;