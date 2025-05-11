import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookAppointment from './components/BookAppointment';
import MechanicsPage from './components/MechanicsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/mechanics" element={<MechanicsPage />} />
          {/* Add more routes as you build more pages */}
          {/* <Route path="/services" element={<ServicesPage />} /> */}
          {/* <Route path="/about" element={<AboutPage />} /> */}
          {/* <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;