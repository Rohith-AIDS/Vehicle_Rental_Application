import React from 'react';

function BikeListPage() {
  const bikes = [
    { id: 1, name: 'Hero Splendor', type: 'Standard' },
    { id: 2, name: 'Royal Enfield Classic', type: 'Cruiser' },
    { id: 3, name: 'Honda Activa', type: 'Scooter' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Available Bikes</h2>
      <ul>
        {bikes.map(bike => (
          <li key={bike.id}>
            <strong>{bike.name}</strong> - {bike.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BikeListPage;
