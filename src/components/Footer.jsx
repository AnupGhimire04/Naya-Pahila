import { useState } from "react";
import "../App.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email address.");
      return;
    }
    alert(`Thank you for subscribing! You will receive updates at ${email}.`);
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>NAYA PAHILA</h2>
        <p>Your trusted consultancy for a brighter future abroad.</p>

        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#countries">Countries</a>
          <a href="#courses">Courses</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="Instagram" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="LinkedIn" />
          </a>
        </div>

        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>

        <p className="copyright">© 2025 NAYA PAHILA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;