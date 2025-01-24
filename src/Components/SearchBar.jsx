
import React from "react";

function SearchBar({ search, onChange }) {
  return (
    <input
      value={search}
      onChange={onChange}
      type="text"
      placeholder="Enter a Pokemon name"
    />
  );
}

export default SearchBar;
