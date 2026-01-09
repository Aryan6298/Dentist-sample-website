import "./Services.css";
import Servicesimg from "../assets/images/services.jpg";

function Services() {
  return (
    <section className="services" id="services">

      {/* Header */}
      <div className="services-header">
        <h2>Our Dental Services</h2>
        <p>
          We specialize in advanced ceramic caps for perfect tooth adjustment,
          natural appearance, and long-lasting comfort.
        </p>
      </div>

      {/* Main Service – Ceramic Caps */}
      <div className="service-highlight">
        <div className="service-text">
          <h3>Ceramic Caps for Teeth Adjustment</h3>
          <p>
            Ceramic caps (ceramic crowns) are the best solution for correcting
            misaligned, damaged, discolored, or uneven teeth. At Muskaan Dental
            Clinic, we focus on precise tooth adjustment to give you a natural,
            confident smile.
          </p>

          <ul>
            <li>🦷 Natural tooth-like appearance</li>
            <li>🦷 Perfect alignment & shape correction</li>
            <li>🦷 Long-lasting & stain-resistant</li>
            <li>🦷 Comfortable and painless procedure</li>
          </ul>

          <p className="service-note">
            Our ceramic caps are custom-made to match your natural teeth color
            and structure, ensuring flawless results.
          </p>
        </div>

        <div className="service-image">
          <img src={Servicesimg} alt="Dental Clinic" />  
        </div>
      </div>

      {/* Other Services */}
      <div className="other-services">
        <h3>Other Treatments We Offer</h3>

        <div className="service-cards">
          <div className="service-card">
            <h4>Teeth Cleaning & Polishing</h4>
            <p>
              Professional cleaning to remove plaque, tartar, and stains for
              healthier gums.
            </p>
          </div>

          <div className="service-card">
            <h4>Tooth Filling</h4>
            <p>
              High-quality fillings to restore damaged or decayed teeth safely.
            </p>
          </div>

          <div className="service-card">
            <h4>Root Canal Treatment</h4>
            <p>
              Pain-free RCT to save infected teeth and eliminate discomfort.
            </p>
          </div>

          <div className="service-card">
            <h4>Smile Makeover</h4>
            <p>
              Complete smile enhancement using ceramic caps and cosmetic
              dentistry.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Services;
