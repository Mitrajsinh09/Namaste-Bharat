import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";

const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState("signup");

  return (
    <header className="shadow-sm fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container d-flex align-items-center justify-content-between">
          {/* Text Logo on left */}
          <Link to="/" className="navbar-brand me-auto text-logo">
            Namaaste <span>India</span>
          </Link>

          {/* Center Nav Links */}
          <div className="mx-auto d-none d-lg-flex">
            <ul className="navbar-nav gap-4">
              <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
              <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
              <li className="nav-item"><Link to="/explore-map" className="nav-link">Explore Map</Link></li>
              <li className="nav-item"><Link to="/contact" className="nav-link">Contact Us</Link></li>
            </ul>
          </div>

          {/* Toggle Signup/Login */}
          <div className="ms-auto d-none d-lg-block">
            <div className="auth-toggle">
              <Link
                to="/signup"
                className={`toggle-btn ${activeTab === "signup" ? "active" : ""}`}
                onClick={() => setActiveTab("signup")}
              >
                Signup
              </Link>
              <Link
                to="/login"
                className={`toggle-btn ${activeTab === "login" ? "active" : ""}`}
                onClick={() => setActiveTab("login")}
              >
                Login
              </Link>
              <div className={`toggle-indicator ${activeTab}`}></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
