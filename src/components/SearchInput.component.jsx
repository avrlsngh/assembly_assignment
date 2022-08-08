import React from "react";

export default function SearchInput({ handleSearchChange }) {
  return (
    <input
      onChange={handleSearchChange}
      className="searchInput"
      type="text"
      placeholder="Type any Organization name"
    />
  );
}
