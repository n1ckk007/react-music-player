import React, { useEffect } from "react";
import "./search-box.scss";

const SearchBox = ({ handleChange, searchTerm }) => {
  return (
    <div className="input-container">
      <input
        className="search"
        type="search"
        placeholder="Search songs"
        onChange={handleChange}
        value={searchTerm}
      />
    </div>
  );
};

export default SearchBox;
