import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import AboutUs from './AboutUs';
import MapSection from './MapSection';
import Testimonials from './Testimonials';
import PromoVideo from './PromoVideo';
import Footer from './Footer';
import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="map">
        <MapSection />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="promo">
        <PromoVideo />
      </section>
      <Footer />
    </div>
  );
}

export default App;
