import React, { useState } from 'react';
import Navbar from './Navbar';
import '../styles/BookAppointment.css';

function BookAppointment() {
  // Mechanic data (in a real app, this would come from an API)
  const mechanics = [
    { id: 1, name: "Alex Johnson", specialization: "Engine Repair", experience: "8 years" },
    { id: 2, name: "Sarah Chen", specialization: "Brake Systems", experience: "10 years" },
    { id: 3, name: "Miguel Rodriguez", specialization: "Electrical Systems", experience: "5 years" },
    { id: 4, name: "Priya Patel", specialization: "General Maintenance", experience: "7 years" }
  ];
  // Single state object for all form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carMake: '',
    carModel: '',
    carYear: '',
    serviceType: '',
    mechanicId: '',
    appointmentDate: '',
    appointmentTime: '',
  });
  
  // State for showing success message
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    // Get the name and value from the input that changed
    const { name, value } = e.target;
    
    // Update state with new value while keeping other fields the same
    setFormData({
      ...formData,      // Keep all existing data
      [name]: value     // Update just the changed field
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();
    
    // In a real app, you would send data to server here
    console.log("Form submitted with data:", formData);
    
    // Show success message
    setIsSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        carMake: '',
        carModel: '',
        carYear: '',
        serviceType: '',
        mechanicId: '',
        appointmentDate: '',
        appointmentTime: '',
      });
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <div>
      <Navbar />
      
      <div className="appointment-container">
        <h1>Book Your Car Service Appointment</h1>
        
        {/* Success message */}
        {isSuccess && (
          <div className="success-message">
            Appointment booked successfully!
          </div>
        )}
        
        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <h2>Personal Information</h2>
          
          <div>
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="two-column">
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          {/* Vehicle Information */}
          <h2>Vehicle Information</h2>
          
          <div className="two-column">
            <div>
              <label htmlFor="carMake">Car Make:</label>
              <input
                type="text"
                id="carMake"
                name="carMake"
                value={formData.carMake}
                onChange={handleChange}
                required
                placeholder="e.g. Toyota"
              />
            </div>
            
            <div>
              <label htmlFor="carModel">Car Model:</label>
              <input
                type="text"
                id="carModel"
                name="carModel"
                value={formData.carModel}
                onChange={handleChange}
                required
                placeholder="e.g. Corolla"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="carYear">Year:</label>
            <input
              type="number"
              id="carYear"
              name="carYear"
              value={formData.carYear}
              onChange={handleChange}
              required
              placeholder="e.g. 2020"
            />
          </div>
          
          {/* Mechanic Selection */}
          <h2>Select Your Mechanic</h2>
          
          <div className="mechanic-selection">
            {mechanics.map(mechanic => (
              <div 
                key={mechanic.id} 
                className={`mechanic-card ${formData.mechanicId === mechanic.id ? 'selected' : ''}`}
                onClick={() => setFormData({...formData, mechanicId: mechanic.id})}
              >
                <h3>{mechanic.name}</h3>
                <p><strong>Specialization:</strong> {mechanic.specialization}</p>
                <p><strong>Experience:</strong> {mechanic.experience}</p>
              </div>
            ))}
          </div>
          
          {/* Service Information */}
          <h2>Service Information</h2>
          
          <div>
            <label htmlFor="serviceType">Service Type:</label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option value="Oil Change">Oil Change</option>
              <option value="Brake Service">Brake Service</option>
              <option value="Tire Replacement">Tire Replacement</option>
              <option value="Regular Maintenance">Regular Maintenance</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div className="two-column">
            <div>
              <label htmlFor="appointmentDate">Date:</label>
              <input
                type="date"
                id="appointmentDate"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <label htmlFor="appointmentTime">Time:</label>
              <select
                id="appointmentTime"
                name="appointmentTime"
                value={formData.appointmentTime}
                onChange={handleChange}
                required
              >
                <option value="">Select a time</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
              </select>
            </div>
          </div>
          
          {/* Submit Button */}
          <button type="submit">Book Appointment</button>
        </form>
      </div>
    </div>
  );
}

export default BookAppointment;