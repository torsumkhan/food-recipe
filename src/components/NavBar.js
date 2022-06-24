import { Link } from "react-router-dom";
import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Super Cook Book</h1>
        </Link>
        <Link to="/create" className="create-btn">
          Create Recipe
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
