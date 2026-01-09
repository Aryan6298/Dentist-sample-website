import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Clinic Info */}
        <div className="footer-section">
          <h3>Muskaan Dental Clinic</h3>
          <p>
            Providing gentle, professional dental care with modern technology.
            Your smile is our commitment.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#doctors">Doctors</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>📍 Delhi, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@muskaandental.com</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Muskaan Dental Clinic. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
