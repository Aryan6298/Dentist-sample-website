import "./Doctors.css";
import img1 from "../assets/images/docter1.jpeg";
import img2 from "../assets/images/docter2.jpeg";


function Doctors() {
  return (
    <section className="doctors" id="doctors">

      {/* ================= HEADER ================= */}
      <div className="doctors-header">
        <h2>Meet Our Doctors & Team</h2>
        <p>
          Our experienced dental professionals are dedicated to providing
          high-quality, gentle, and advanced dental care.
        </p>
      </div>


      {/* ================= DOCTOR 1 ================= */}
      <div className="main-doctor">

        <div className="doctor-image">
          <img
            src={img1}
            alt="Dr Vipul Jain"
          />
        </div>

        <div className="doctor-info">
          <h3>Dr. Vipul Jain</h3>
          <p className="doctor-role">B.D.S, M.D.S (Orthodontics)</p>

          <ul className="doctor-qualifications">
            <li>🎓 Bachelor of Dental Surgery (BDS)</li>
            <li>🎓 Master of Dental Surgery (MDS)</li>
            <li>🦷 Specialist in Ceramic Caps & Braces</li>
            <li>🏥 15+ Years of Clinical Experience</li>
          </ul>

          <p className="doctor-description">
            Dr. Vipul Jain specializes in ceramic caps, crowns, orthodontic
            treatments, and complete smile restoration. His precision in tooth
            alignment ensures natural-looking and long-lasting results.
          </p>
        </div>

      </div>


      {/* ================= DOCTOR 2 ================= */}
      <div className="main-doctor">

        {/* Two Images */}
        <div className="doctor-image double-img">
          <img
            src={img2}
            alt="Dr Suchi Jain 1"
          />
          
        </div>

        <div className="doctor-info">
          <h3>Dr. Suchi Jain</h3>
          <p className="doctor-role">B.D.S, M.D.S (Pedodontics)</p>

          <ul className="doctor-qualifications">
            <li>🎓 Bachelor of Dental Surgery (BDS)</li>
            <li>🎓 Master of Dental Surgery (MDS)</li>
            <li>🦷 Specialist in Kids Dentistry</li>
            <li>🏥 15+ Years of Clinical Experience</li>
          </ul>

          <p className="doctor-description">
            Dr. Suchi Jain specializes in pediatric dentistry and provides
            gentle, child-friendly dental care. Her compassionate approach
            ensures kids feel safe, comfortable, and confident during every visit.
          </p>
        </div>

      </div>


      {/* ================= TEAM ================= */}
      

      {/* ================= TRUST ================= */}
      <div className="trust-section">
        <h3>Why Patients Trust Us</h3>

        <ul>
          <li> Advanced ceramic cap technology</li>
          <li> Highly qualified & experienced doctors</li>
          <li> Hygienic, modern clinic environment</li>
          <li> Transparent consultation & treatment plans</li>
        </ul>
      </div>

    </section>
  );
}

export default Doctors;
