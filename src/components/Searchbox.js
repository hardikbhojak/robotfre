import React from "react";

const Searchbox = ({ searchField, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--blue bg-light-green"
        type="search"
        placeholder="Searach Robo"
        onChange={searchChange}
      />
    </div>
  );
};

export default Searchbox;
