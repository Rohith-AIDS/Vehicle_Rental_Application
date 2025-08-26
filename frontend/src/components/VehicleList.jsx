import { useEffect, useState } from 'react';
import axios from 'axios';
import './VehicleList.css';

function VehicleList() {
  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8088/vehicles')
      .then((res) => setVehicles(res.data))
      .catch((err) => {
        console.error('Error fetching vehicles:', err);
        setError('Failed to load vehicles');
      });
  }, []);

  return (
    <div className="vehicle-container">
      <h2>Available Vehicles</h2>
      {error && <p className="error">{error}</p>}
      <div className="vehicle-grid">
        {vehicles.map((v) => (
          <div key={v.id} className="vehicle-card">
            <img src={v.imageUrl} alt={v.model} className="vehicle-image" />
            <div className="vehicle-details">
              <h3>{v.model}</h3>
              <p>{v.vehicleNumber}</p>
              <p>₹{v.pricePerDay}/day</p>
              <p className={v.availability ? 'available' : 'unavailable'}>
                {v.availability ? 'Available' : 'Not Available'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VehicleList;
