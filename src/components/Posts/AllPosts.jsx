import { useState } from "react";
import { GetAllPosts } from "../../services/postService.jsx";
import { useEffect } from "react";

export const AllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    GetAllPosts().then((postsArray) => {
      setAllPosts(postsArray);
    });
  }, []);

  return (
    <div className="posts">
      <div>
        <h2>Posts</h2>
      </div>
      {allPosts.map((post) => {
        return (
          <div key={post.id}>
            <div className="title">
              <div> Title</div>
              <div>{post.title}</div>
            </div>
            <div className="Body">
              <div>Body:</div>
              <div>{post.body}</div>
            </div>
            <div className="date">Date: {post.date}</div>
          </div>
        );
      })}
    </div>
  );
};
