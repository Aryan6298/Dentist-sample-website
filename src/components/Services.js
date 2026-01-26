import React, { useState, useEffect } from "react";
import "./Services.css";

import Servicesimg from "../assets/images/servise.jpeg";

/* slider images (put your images inside assets/images) */
import s1 from "../assets/images/servise1.avif";
import s2 from "../assets/images/servise2.jpg";
import s3 from "../assets/images/servise3.jpg";
import s4 from "../assets/images/servise4.jpg";

function Services() {
  /* =====================
     SLIDER LOGIC
  ===================== */
  const servicesData = [
    { title: "Ceramic Caps", desc: "Natural looking & long lasting ceramic caps.", img: s1 },
    { title: "Teeth Whitening", desc: "Bright white smile treatment.", img: s2 },
    { title: "Root Canal", desc: "Pain-free advanced RCT treatment.", img: s3 },
    { title: "Braces", desc: "Perfect teeth alignment solutions.", img: s4 }
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % servicesData.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [servicesData.length]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % servicesData.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  return (
    <section className="services" id="services">

      {/* ================= HEADER ================= */}
      <div className="services-header">
        <h2>Our Dental Services</h2>
        <p>
          We specialize in advanced ceramic caps for perfect tooth adjustment,
          natural appearance, and long-lasting comfort.
        </p>
      </div>

      {/* ================= MAIN SERVICE ================= */}
      <div className="service-highlight">
        <div className="service-text">
          <h3>Ceramic Caps for Teeth Adjustment</h3>
          <p>
            Ceramic caps are the best solution for correcting misaligned,
            damaged, discolored or uneven teeth for a confident smile.
          </p>

          <ul>
            <li>🦷 Natural tooth-like appearance</li>
            <li>🦷 Perfect alignment & shape correction</li>
            <li>🦷 Long-lasting & stain-resistant</li>
            <li>🦷 Comfortable and painless procedure</li>
          </ul>
        </div>

        <div className="servise">
          <img src={Servicesimg} alt="Dental Clinic" />
        </div>
      </div>

      {/* ================= SLIDER SECTION ================= */}
      <h3 className="slider-title">More Treatments</h3>

      <div className="slider-wrapper">

        <button className="slide-btn left" onClick={prevSlide}>❮</button>

        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {servicesData.map((item, i) => (
            <div className="slide-card" key={i}>
              <img src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <button className="slide-btn right" onClick={nextSlide}>❯</button>

      </div>

      {/* ================= OTHER SERVICES ================= */}
      <div className="other-services">
        <h3>Other Treatments We Offer</h3>

        <div className="service-cards">
          <div className="service-card">
            <h4>Teeth Cleaning</h4>
            <p>Remove plaque & stains professionally.</p>
          </div>

          <div className="service-card">
            <h4>Tooth Filling</h4>
            <p>Restore damaged or decayed teeth safely.</p>
          </div>

          <div className="service-card">
            <h4>Root Canal</h4>
            <p>Pain-free infection removal treatment.</p>
          </div>

          <div className="service-card">
            <h4>Smile Makeover</h4>
            <p>Complete cosmetic smile enhancement.</p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Services;