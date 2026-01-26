import React from "react";
import "./About.css";
import aboutImg from "../assets/images/about.webp";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* Left Side Image */}
        <div className="about-image">
    <img src={aboutImg} alt="Dental Clinic" />

    
</div>


        {/* Right Side Content */}
        <div className="about-text">
          <h2 className="about-title">A Smile You Can Trust</h2>

          <p className="about-desc">
            At our dental clinic, we believe that every smile tells a story.
            We are dedicated to providing high-quality ceramic teeth caps, 
            cosmetic treatments, and advanced dental procedures to help you 
            achieve a confident, healthy, and beautiful smile.
          </p>

          <p className="about-desc">
            Using cutting-edge technology and the latest digital scanning methods, 
            we ensure treatments that are painless, precise, and long-lasting.
            Our expert team works with passion and care to create a relaxing 
            and comfortable experience for every patient.
          </p>

          {/* Highlights */}
          <div className="about-highlights">
            <div className="highlight-box">
              <h3>10+ Years of Experience</h3>
              <p>Trusted by thousands of happy patients.</p>
            </div>

            <div className="highlight-box">
              <h3>Advanced Ceramic Caps</h3>
              <p>Natural-looking, durable, and premium quality.</p>
            </div>

            <div className="highlight-box">
              <h3>Painless Procedures</h3>
              <p>Modern equipment for smooth and stress-free treatment.</p>
            </div>
          </div>

          {/* Points List */}
          <ul className="about-points">
            <li> Personalized treatment plans for every patient</li>
            <li> 3D scanning & premium ceramic material</li>
            <li> Dental experts with years of certified experience</li>
            <li> Hygienic, safe, and advanced clinic environment</li>
            <li> Affordable and transparent pricing</li>
          </ul>

          
        </div>

      </div>
    </section>
  );
};

export default About;
