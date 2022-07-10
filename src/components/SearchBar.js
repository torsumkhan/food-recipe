import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./searchbar.css";

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/search?q=${term}`);
  };

  return (
    <div className="search-bar">
      <form onSubmit={submitHandler}>
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          required
        />
      </form>
    </div>
  );
};

export default SearchBar;
