import { useState } from "react";
import { GetAllPosts } from "../../services/postService.jsx";
import { useEffect } from "react";
import "./Posts.css";

export const AllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    GetAllPosts().then((postsArray) => {
      setAllPosts(postsArray);
    });
  }, []);

  return (
    <div className="posts">
      <div></div>
      {allPosts.map((post) => {
        return (
          <article className="posts-container" key={post.id}>
            <div className="post">
              <div>
                <div className="title"> Title:</div>
                <div className="post-info">{post.title}</div>
              </div>
              <div>
                <div className="title">Body:</div>
                <div className="post-info">{post.body}</div>
              </div>
              <div className="post-info">Date: {post.date}</div>
            </div>
          </article>
        );
      })}
    </div>
  );
};
