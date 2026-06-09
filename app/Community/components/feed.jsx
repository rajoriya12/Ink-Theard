import FeedCard from "./FeedCard";

function Feed({ poetry = [], handleLike, handleDelete }) {
  return (
    <div>
      {poetry.map((item) => (
        <FeedCard
          key={item._id}
          item={item}
          handleLike={handleLike}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default Feed;