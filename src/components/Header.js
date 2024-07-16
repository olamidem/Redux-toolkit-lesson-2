// components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Blog Application</h1>
        <nav className="header-nav">
          <Link to="/" className="header-link">
            Home
          </Link>
          <Link to="/post" className="header-link">
            Post
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
