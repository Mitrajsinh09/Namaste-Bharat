import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Contact from "./Components/Contact";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ExploreMap from "./Pages/ExploreMap";
// import "./Styles/App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/map" element={<ExploreMap />} />
      </Routes>
    </Router>
  );
};

export default App;
