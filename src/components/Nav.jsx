import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import React from "react";
import "../index.css";

const Nav = ({ onSearch, logout }) => {
  return (
    <div className="nav-container">
      <Link to="/home" className="celdas">
        HOME
      </Link>
      <Link to="/favorites" className="celdas">
        FAVORITES
      </Link>
      <Link to="/about" className="celdas">
        ABOUT
      </Link>
      <SearchBar onSearch={onSearch} />
      <button onClick={logout}>Logout</button>
    </div>
  );
};
export default Nav;
