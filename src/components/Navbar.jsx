import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Car Service Center</a>
      </div>
      
      <ul className="navbar-links">
        <li><a href="/" className="active">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/mechanics">Our Mechanics</a></li>
        <li><a href="/book-appointment">Book Appointment</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;