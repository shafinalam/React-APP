import React from 'react';
import Navbar from './Navbar';
import '../styles/MechanicsPage.css';

function MechanicsPage() {
  // Mechanic data (in a real app, this would come from an API)
  const mechanics = [
    { 
      id: 1, 
      name: "Alex Johnson", 
      specialization: "Engine Repair", 
      experience: "8 years",
      bio: "Alex specializes in diagnosing and repairing complex engine issues. With 8 years of experience, he has worked on various car makes and models.",
      certifications: ["ASE Master Technician", "Toyota Certified"], 
      image: "/api/placeholder/150/150"
    },
    { 
      id: 2, 
      name: "Sarah Chen", 
      specialization: "Brake Systems", 
      experience: "10 years",
      bio: "Sarah is our brake system expert with over a decade of experience. She ensures your vehicle's braking system is in perfect condition for maximum safety.",
      certifications: ["ASE Brake Specialist", "Honda Certified"], 
      image: "/api/placeholder/150/150"
    },
    { 
      id: 3, 
      name: "Miguel Rodriguez", 
      specialization: "Electrical Systems", 
      experience: "5 years",
      bio: "Miguel excels in diagnosing and fixing electrical issues in modern vehicles. He stays up-to-date with the latest automotive electronics technology.",
      certifications: ["ASE Electrical Systems", "BMW Specialist"], 
      image: "/api/placeholder/150/150"
    },
    { 
      id: 4, 
      name: "Priya Patel", 
      specialization: "General Maintenance", 
      experience: "7 years",
      bio: "Priya handles all aspects of routine maintenance and ensures your vehicle runs smoothly. She has comprehensive knowledge of preventative care.",
      certifications: ["ASE Maintenance Technician", "Multi-brand Certified"], 
      image: "/api/placeholder/150/150"
    }
  ];

  return (
    <div>
      <Navbar />
      
      <div className="mechanics-container">
        <h1>Meet Our Expert Mechanics</h1>
        <p className="mechanics-intro">
          Our team of certified mechanics are here to provide the best service for your vehicle. 
          Each specialist brings years of experience and expertise to ensure quality repairs and maintenance.
        </p>
        
        <div className="mechanics-grid">
          {mechanics.map(mechanic => (
            <div key={mechanic.id} className="mechanic-profile">
              <div className="mechanic-header">
                <img 
                  src={mechanic.image} 
                  alt={`${mechanic.name} - Car Mechanic`} 
                  className="mechanic-image"
                />
                <div className="mechanic-title">
                  <h2>{mechanic.name}</h2>
                  <h3>{mechanic.specialization}</h3>
                </div>
              </div>
              
              <div className="mechanic-details">
                <p><strong>Experience:</strong> {mechanic.experience}</p>
                <p>{mechanic.bio}</p>
                
                <div className="certifications">
                  <strong>Certifications:</strong>
                  <ul>
                    {mechanic.certifications.map((cert, index) => (
                      <li key={index}>{cert}</li>
                    ))}
                  </ul>
                </div>
                
                <a href="/book-appointment" className="book-button">
                  Book with {mechanic.name.split(" ")[0]}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MechanicsPage;