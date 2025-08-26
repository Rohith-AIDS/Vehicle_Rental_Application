import { useEffect, useState } from 'react';
import axios from 'axios';

function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8088/api/bookings')
      .then((res) => setBookings(res.data))
      .catch((err) => {
        console.error('Error fetching bookings:', err);
        setError('Failed to load bookings');
      });
  }, []);

  return (
    <div>
      <h2>All Bookings</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Vehicle Number</th>
              <th>Model</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.customerName}</td>
                <td>{b.startDate}</td>
                <td>{b.endDate}</td>
                <td>{b.vehicle?.vehicleNumber}</td>
                <td>{b.vehicle?.model}</td>
                <td>₹{b.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default BookingList;
