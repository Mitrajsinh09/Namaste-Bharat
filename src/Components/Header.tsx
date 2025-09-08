import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // ✅ Import CSS
import logo from "../Assets/Header/Logo.png"; // ✅ Adjust path as per your folder structure

const Header: React.FC = () => {
  return (
    <header className="header shadow-sm fixed-top">
      <div className="container d-flex align-items-center justify-content-between py-3">
        {/* Logo */}
        <Link to="/" className="logo">
          <img src={logo} alt="Namaste Bharat Logo" className="logo-img" />
        </Link>

        {/* Navigation */}
        <nav className="nav-links d-none d-md-flex">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/about" className="nav-item">
            About
          </Link>
          <Link to="/explore-map" className="nav-item">
            Explore Map
          </Link>
          <Link to="/contact" className="nav-item">
            Contact Us
          </Link>
          <Link to="/signup" className="btn signup-btn">
            Signup
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
