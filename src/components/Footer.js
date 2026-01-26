import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";


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
          {/* Social Media Links */}
          <div className="social-media">
  <a href="https://www.facebook.com/muskaandentalclinic" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a>

  <a href="https://www.instagram.com/muskaandentalclinic" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>

  <a href="https://www.twitter.com/muskaandentalclinic" target="_blank" rel="noopener noreferrer">
    <FaTwitter />
  </a>

  <a href="https://www.linkedin.com/company/muskaan-dental-clinic" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn />
  </a>

  <a href="https://www.youtube.com/c/muskaandentalclinic" target="_blank" rel="noopener noreferrer">
    <FaYoutube />
  </a>
</div>

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
          <p>Muskaan dental clinic First floor E block surendra landmark Hoshangabad road Misrod Bhopal</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ info@muskaandental.com</p>
          <p>🕒 Mon-Fri: 9AM-7PM | Sat: 9AM-5PM</p>
        </div>

        {/* Location Map */}
        <div className="footer-section">
          <h4>Find Us</h4>
          <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.754259743969!2d77.457818!3d23.179167399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43ef6f3fb597%3A0x8dc69740ea10f11!2sMuskaan%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1769336325512!5m2!1sen!2sin"
             width="900"
              height="180"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Muskaan Dental Clinic Location">
            </iframe>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Muskaan Dental Clinic. All rights reserved. | <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;