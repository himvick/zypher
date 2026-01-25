import React from "react";

const SearchBar = () => {
  return (
    <div className="flex flex-row relative h-8 w-80">
      <input
        type="text"
        placeholder="Search Ethereum Tokens"
        className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="absolute right-1 top-1 px-4 bg-blue-950 hover:bg-blue-900 text-white rounded-2xl">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
