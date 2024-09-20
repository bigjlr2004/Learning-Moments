import { useState } from "react";
import { GetAllPosts } from "../../services/postService.jsx";
import { useEffect } from "react";
import "./Posts.css";
import { FilterBar } from "../NavBar/FilterBar.jsx";
import { Topics } from "../NavBar/Topics.jsx";

export const DisplayPosts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    GetAllPosts().then((postsArray) => {
      setAllPosts(postsArray);
    });
  }, []);
  useEffect(() => {
    setFilteredPosts(allPosts);
  }, [allPosts]);

  useEffect(() => {
    const FoundPosts = allPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(FoundPosts);
  }, [allPosts, searchTerm]);

  return (
    <div className="posts">
      <div className="navbar ">
        <div>
          <Topics />
        </div>
        <div>
          <FilterBar setAllPosts={setAllPosts} setSearchTerm={setSearchTerm} />
        </div>
      </div>

      {filteredPosts.map((post) => {
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
