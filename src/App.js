import "./App.css";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp"; // Add this import

import heroImage from "./assets/images/heroImage.webp";
import img from "./assets/images/1.jpg";
import img1 from "./assets/images/2.jpg";
import img2 from "./assets/images/3.jpg"; 
import img3 from "./assets/images/4.jpg";

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
          
        </div>
        <div className="hero-img float">
  <img src={heroImage} alt="Dental Clinic" />
</div>
{/* 🌸 Flower Image Circles */}
    <div className="flower-circle-group">

      

      <div className="circle top">
        <img src={img3} alt="top" />
      </div>

      <div className="circle left">
        <img src={img1} alt="left" />
      </div>

      <div className="circle right">
        <img src={img2} alt="right" />
      </div>

      <div className="circle bottom">
        <img src={img} alt="bottom" />
      </div>

    </div>

      </section>
      <FloatingWhatsApp />


      <About />
      <Services />
      <Doctors />
      <Contact />
      <Footer />

      {/* Add the Floating WhatsApp Component */}
      
    </div>
  );
}

export default App;
