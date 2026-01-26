import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">

      {/* Header */}
      <div className="contact-header">
        <h2>📞 Contact Us</h2>
        <p>
          Call or message us today to book your dental appointment.
        </p>
      </div>

      {/* Main Contact Box */}
      <div className="contact-box card-glass">

        <h3>Book Your Appointment</h3>
        <p>
          Looking for ceramic caps, aligners or a complete smile correction?
          Our dental experts are here to help you.
        </p>

        <a href="tel:917999430861" className="contact-btn call">
          📞 Call Now
        </a>

        <a
          href="https://wa.me/917999430861?text=Hello%20I%20want%20to%20book%20an%20appointment"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn whatsapp"
        >
          💬 Message on WhatsApp
        </a>

        <p className="contact-note">
          Our team will respond quickly and help you schedule a convenient time.
        </p>

      </div>

    </section>
  );
}

export default Contact;
