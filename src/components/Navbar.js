import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/final_logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Navigation click handler
   * - Desktop: normal anchor
   * - Mobile: smooth scroll + close everything
   */
  const handleNavClick = (e, id) => {
    if (!menuOpen) {
      // Desktop: just close dropdown if open
      setServicesOpen(false);
      return;
    }

    // Mobile
    e.preventDefault();

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Goal achieved → close everything
    setMenuOpen(false);
    setServicesOpen(false);
  };

  /**
   * Hamburger toggle
   * 🔑 Always reset dropdown when hamburger is clicked
   */
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
    setServicesOpen(false); // 🔥 dropdown NEVER auto-opens
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
            <img src={logo} alt="logo" />
          </a>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
              About
            </a>
          </li>

          <li>
            <a href="#doctors" onClick={(e) => handleNavClick(e, "doctors")}>
              Doctors
            </a>
          </li>

          {/* Services Dropdown */}
          <li className={`dropdown ${servicesOpen ? "open" : ""}`}>
            <a
              href="#services"
              onClick={(e) => {
                if (!menuOpen) {
                  // Desktop behavior
                  setServicesOpen(false);
                  return;
                }

                // Mobile → toggle dropdown ONLY
                e.preventDefault();
                setServicesOpen(prev => !prev);
              }}
            >
              Services ▾
            </a>

            <ul className="dropdown-menu">
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "services")}>
                  Teeth Cleaning
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "services")}>
                  Teeth Whitening
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "services")}>
                  Dental Implants
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "services")}>
                  Braces & Aligners
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "services")}>
                  Ceramic Caps
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
              Contact
            </a>
          </li>
        </ul>

        {/* Contact */}
        <div className="nav-contact">
          <span>📞 +91 98765 43210</span>
          <span>📞 +91 91234 56789</span>
        </div>

        {/* Location */}
        <div className="nav-location">
          <a
            href="https://maps.app.goo.gl/y383tookMeZpmUZBA?g_st=aw"
            target="_blank"
            rel="noreferrer"
          >
            <span>📍 Muskaan Dental Clinic</span>
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
