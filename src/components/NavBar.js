import { Link } from "react-router-dom";
import React from "react";
import SearchBar from "./SearchBar";
import { useTheme } from "../hooks/useTheme";
import "./navbar.css";

const NavBar = () => {
  const { changeColor } = useTheme();
  return (
    <div className="navbar" style={{ background: changeColor }}>
      <nav onClick={() => changeColor("red")}>
        <Link to="/" className="brand">
          <h1>Super Cook Book</h1>
        </Link>
        <SearchBar />
        <Link to="/create" className="create-btn">
          Create Recipe
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
