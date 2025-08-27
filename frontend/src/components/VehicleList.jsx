
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './vehicle.css';

function VehicleList() {
  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/Bikes.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => setVehicles(data))
      .catch((err) => {
        console.error('Error loading sample data:', err);
        setError('Failed to load vehicles');
      });
  }, []);

  return (
    <div className="App">
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div className="top-left">
          <span>📍 Find A Location</span>
          <span>📞 +01234567890</span>
          <span>✉️ Example@gmail.com</span>
        </div>
        <div className="top-right">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">Cental</div>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-overlay">
          <h1>Our Bikes</h1>
          <p>Home / Pages / Categories</p>
        </div>
      </div>

      {/* Vehicle List Section */}
      <div className="vehicle-container">
        <h2 className="vehicle-title">Available Vehicles</h2>
        {error && <p className="error">{error}</p>}
        <div className="vehicle-grid">
          {vehicles.map((v) => (
            <div key={v.id} className="vehicle-card">
              <img src={v.imageUrl} alt={v.model} className="vehicle-image" />
              <div className="vehicle-details">
                <h3>{v.model}</h3>
              <p>{v .vehicleNumber}</p>
                <p>₹{v.pricePerDay}/day</p>
                <p className={v.availability ? 'available' : 'unavailable'}>
                  {v.availability ? 'Available' : 'Not Available'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VehicleList;
