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
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
         
        {/* CTA Button */}
        <button className="navbar-btn" onClick={onBook}>
          Book Appointment
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
