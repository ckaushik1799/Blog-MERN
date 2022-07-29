import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts &&
        posts.map((p) => {
          return <Post post={p} />; // sending each individual post to post.jsx to build each posts.
        })}
    </div>
  );
}
