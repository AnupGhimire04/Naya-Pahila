import "../App.css"; // Using App.css for styles

const Footer = () => {
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
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="Facebook" /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="Instagram" /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="LinkedIn" /></a>
        </div>

        <p className="copyright">© 2025 NAYA PAHILA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
