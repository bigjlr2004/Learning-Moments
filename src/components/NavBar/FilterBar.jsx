import { useState } from "react";

export const FilterBar = ({ setAllPosts, setSearchTerm }) => {
  return (
    <div className="filter-bar">
      <input
        type="text"
        className="post-search"
        placeholder="Search Post Topics"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
    </div>
  );
};
