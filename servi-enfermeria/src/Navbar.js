import React from 'react';
import './Navbar.css'; // Asegúrate de que este archivo CSS esté correcto

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Servicios de Enfermería</h1>
        <ul className="navbar-links">
          <li><a href="#hero">Inicio</a></li>
          <li><a href="#about">Sobre Nosotros</a></li>
          <li><a href="#map">Encuentra un Enfermero</a></li>
          <li><a href="#testimonials">Testimonios</a></li>
          <li><a href="#promo">Video</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
