import React from "react";
import "./Search-Box-styles.css";
const SearchBox = ({ onMonsterSearch }) => {
  return (
    <div className="search_box--container">
      <input
        type="search"
        onChange={onMonsterSearch}
        placeholder="search for a name"
      ></input>
    </div>
  );
};

export default SearchBox;
