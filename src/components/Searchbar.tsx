"use client";

import React from "react";
import { useState } from "react";

const Searchbar: React.FC<{ onSearch: (query: string) => void }> = ({
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; //get the input value
    setSearchQuery(value); //update the state
    onSearch(value); //pass value to parent component
  };

  return (
    <div className="w-full mb-4">
      <input
        type="text"
        placeholder="Search products"
        value={searchQuery}
        onChange={handleSearchChange} //event handler
        className="w-full p-3 border border-grat-300 rounded-lg text-sm md:text-base"
      />
    </div>
  );
};

export default Searchbar;
