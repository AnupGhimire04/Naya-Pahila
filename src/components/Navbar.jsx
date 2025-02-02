import { useState } from "react";
import "../App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu after clicking a link
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src="/logo.png" alt="UCL Logo" className="logo-img" />
          <h1>UCL</h1>
        </div>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={() => handleScroll("home")}>Home</a></li>
          <li><a href="#countries" onClick={() => handleScroll("countries")}>Countries</a></li>
          <li><a href="#courses" onClick={() => handleScroll("courses")}>Courses</a></li>
          <li><a href="#contact" onClick={() => handleScroll("contact")}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;