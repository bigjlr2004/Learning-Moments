export const GetAllTopics = () => {
  return fetch("http://localhost:8088/topics").then((res) => res.json());
};
