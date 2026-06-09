import FeedCard from "./FeedCard";

function Feed({ poetry = [], handleLike, handleDelete }) {
  return (
    <div className="w-full min-w-0 space-y-6">
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