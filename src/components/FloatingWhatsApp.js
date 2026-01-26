import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./FloatingWhatsApp.css";

function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const phoneNumber = "917999430861"; // ❌ remove +
    const message = "Hello! I'd like to book an appointment.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="floating-whatsapp">
      <div
        className="whatsapp-icon"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <FaWhatsapp />
      </div>

      {isHovered && (
        <div className="whatsapp-tooltip">
          Book an Appointment
        </div>
      )}
    </div>
  );
}

export default FloatingWhatsApp;
