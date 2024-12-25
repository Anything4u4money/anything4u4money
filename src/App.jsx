import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/Contact'; // Ensure correct casing for 'Contact'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div style={{
      backgroundImage: "url('/images/background1.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      padding: '20px'
    }}>
<Router>
      <ScrollToTop /> {/* Ensures the page scrolls to the top on route change */}
      <Navbar />
      <div style={{ minHeight: '80vh' }}>
        {/* Adjust minHeight to ensure Footer stays at the bottom */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    </div>
    
  );
};

export default App;
