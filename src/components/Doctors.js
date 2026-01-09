import "./Doctors.css";

function Doctors() {
  return (
    <section className="doctors" id="doctors">

      {/* Header */}
      <div className="doctors-header">
        <h2>Meet Our Doctors & Team</h2>
        <p>
          Our experienced dental professionals are dedicated to providing
          high-quality, gentle, and advanced dental care.
        </p>
      </div>

      {/* Main Doctor */}
      <div className="main-doctor">
        <div className="doctor-image">
          <img
            src="https://i.imgur.com/J0Z9xjY.png"
            alt="Chief Dental Surgeon"
          />
        </div>

        <div className="doctor-info">
          <h3>Dr. Ananya Sharma</h3>
          <p className="doctor-role">BDS, MDS – Prosthodontist</p>

          <ul className="doctor-qualifications">
            <li>🎓 Bachelor of Dental Surgery (BDS)</li>
            <li>🎓 Master of Dental Surgery (MDS)</li>
            <li>🦷 Specialist in Ceramic Caps & Smile Design</li>
            <li>🏥 10+ Years of Clinical Experience</li>
          </ul>

          <p className="doctor-description">
            Dr. Ananya Sharma specializes in ceramic caps, crowns, and complete
            smile restoration. Her precision in tooth adjustment and attention
            to detail ensure natural-looking, long-lasting results for every
            patient.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <h3>Our Dental Team</h3>

        <div className="team-cards">

          <div className="team-card">
            <img src="https://i.imgur.com/vV6Zz9Z.png" alt="Dental Hygienist" />
            <h4>Ritika Verma</h4>
            <p>Senior Dental Hygienist</p>
          </div>

          <div className="team-card">
            <img src="https://i.imgur.com/1XK8T1K.png" alt="Dental Assistant" />
            <h4>Rahul Mehta</h4>
            <p>Dental Assistant</p>
          </div>

          <div className="team-card">
            <img src="https://i.imgur.com/4M34KJ0.png" alt="Clinic Manager" />
            <h4>Pooja Singh</h4>
            <p>Clinic Manager</p>
          </div>

          <div className="team-card">
            <img src="https://i.imgur.com/8d5JHfS.png" alt="Receptionist" />
            <h4>Neha Kapoor</h4>
            <p>Patient Care Coordinator</p>
          </div>

        </div>
      </div>

      {/* Trust Section */}
      <div className="trust-section">
        <h3>Why Patients Trust Us</h3>

        <ul>
          <li>✔ Advanced ceramic cap technology</li>
          <li>✔ Highly qualified & experienced doctors</li>
          <li>✔ Hygienic, modern clinic environment</li>
          <li>✔ Transparent consultation & treatment plans</li>
        </ul>
      </div>

    </section>
  );
}

export default Doctors;
