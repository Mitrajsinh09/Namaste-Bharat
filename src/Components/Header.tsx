// src/components/Header.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Plane } from "lucide-react"; // simple travel icon

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Plane className="text-blue-600" size={28} />
          <span className="text-xl font-bold text-gray-800">
            TravelPro
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/destinations" className="hover:text-blue-600 transition">
            Destinations
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </nav>

        {/* Call-to-Action */}
        <div>
          <Link
            to="/book"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
