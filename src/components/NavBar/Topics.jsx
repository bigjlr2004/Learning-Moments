import { useEffect, useState } from "react";
import { GetAllTopics } from "../../services/TopicsService.jsx";

export const Topics = () => {
  const [postTopics, setPostTopics] = useState([[]]);

  useEffect(() => {
    GetAllTopics().then((topicsArray) => {
      setPostTopics(topicsArray);
    });
  }, []);

  return (
    <div>
      <select id="interior">
        <option value="0">Select topic...</option>
        {postTopics.map((post) => {
          return (
            <option value="{post.id}" key={post.id}>
              {post.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
