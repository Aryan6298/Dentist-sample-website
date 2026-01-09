import "./App.css";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import heroImage from "./assets/images/heroImage.jpg";

function App() {

  const bookAppointment = () => {
    alert("Appointment booking coming soon!");
  };

  return (
    <div className="App">

      {/* GLOBAL BACKGROUND */}
      

      {/* CONTENT */}
      <Navbar onBook={bookAppointment} />

      <section className="hero" id="home">
        <div className="hero-text">
          <h1>Smile Brighter Today</h1>
          <p>
            Professional dental care with modern technology.
            <br />
            Your smile is our priority.
          </p>
          <button onClick={bookAppointment}>
            Book Appointment
          </button>
        </div>
        <div className="hero-img float">
  <img src={heroImage} alt="Dental Clinic" />
</div>

      </section>

      <About />
      <Services />
      <Doctors />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
