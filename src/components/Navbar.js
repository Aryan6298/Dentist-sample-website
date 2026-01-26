import "./Navbar.css";
import logo from "../assets/images/logo.jpg";


function Navbar({ onBook }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Menu */}
        <ul className="navbar-menu">
  <li><a href="#home">Home</a></li>
  <li><a href="#about">About</a></li>
  <li><a href="#doctors">Doctors</a></li>

  {/* SERVICES DROPDOWN */}
  <li className="dropdown">
    <a href="#services">Services ▾</a>
    <ul className="dropdown-menu">
      <li><a href="#cleaning">Teeth Cleaning</a></li>
      <li><a href="#whitening">Teeth Whitening</a></li>
      <li><a href="#implants">Dental Implants</a></li>
      <li><a href="#braces">Braces & Aligners</a></li>
      <li><a href="#caps">Ceramic Caps</a></li>
    </ul>
  </li>

  <li><a href="#contact">Contact</a></li>
</ul>

         
        {/* CTA Button */}
        <div class="nav-contact">
  <span>📞 +91 98765 43210</span>
  <span>📞 +91 91234 56789</span>
</div>

       
        <div class="nav-location">
  <a href="https://maps.app.goo.gl/y383tookMeZpmUZBA?g_st=aw" target="_blank">
    <svg class="location-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 
      0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" 
      fill="#0077ff"/>
    </svg>
    <span>Muskaan Dental Clinic</span>
  </a>
</div>

      </div>
    </nav>
  );
}

export default Navbar;
