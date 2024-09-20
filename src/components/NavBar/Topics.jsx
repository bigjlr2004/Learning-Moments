import { useEffect, useState } from "react";
import { GetAllTopics } from "../../services/TopicsService.jsx";

export const Topics = ({ setSelectedTopic }) => {
  const [postTopics, setPostTopics] = useState([]);

  useEffect(() => {
    GetAllTopics().then((topicsArray) => {
      setPostTopics(topicsArray);
    });
  }, []);

  return (
    <select
      id="topic"
      onChange={(event) => {
        setSelectedTopic(event.target.value);
      }}
    >
      <option value="0">Select topic...</option>
      {postTopics.map((topic) => {
        return (
          <option value={topic.id} key={topic.id}>
            {topic.name}
          </option>
        );
      })}
    </select>
  );
};
