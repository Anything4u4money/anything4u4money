import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/heroSection/HeroSection';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/Contact';
import Services from './components/services/Services';

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div
        style={{
          backgroundImage: "url('/images/assistance.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '80vh',
          opacity: 0.7,
          marginX: '10px'
        }}
      >
        <div id="home" style={{ paddingTop: '100px', scrollMarginTop: '100px' }}>
          <HeroSection />
          {/* <Home /> */}
        </div>
        
        </div>
        <div id="services" style={{ scrollMarginTop: '100px' }}>
          <Services />
        </div>
        <div id="about" style={{ scrollMarginTop: '100px' }}>
          <About />
        </div>
        <div id="contact" style={{ scrollMarginTop: '100px' }}>
          <Contact />
        </div>
     

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
