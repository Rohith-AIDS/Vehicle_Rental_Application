import { useEffect, useState } from 'react';
import axios from 'axios';

function CreateBooking() {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicleId, setSelectedVehicleId] = useState('');
  const [booking, setBooking] = useState({
    customerName: '',
    startDate: '',
    endDate: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8088/vehicles')
      .then((res) => setVehicles(res.data))
      .catch((err) => console.error('Error fetching vehicles:', err));
  }, []);

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:8088/api/bookings/create/${selectedVehicleId}`,
        booking
      );
      setMessage('✅ Booking successful!');
      console.log(response.data);
    } catch (error) {
      setMessage(`❌ Error: ${error.response?.data || error.message}`);
    }
  };

  return (
    <div>
      <h2>Book a Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={booking.customerName}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="startDate"
          value={booking.startDate}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="endDate"
          value={booking.endDate}
          onChange={handleChange}
          required
        />
        <select
          value={selectedVehicleId}
          onChange={(e) => setSelectedVehicleId(e.target.value)}
          required
        >
          <option value="">Select Vehicle</option>
          {vehicles.map((v) => (
            <option key={v.id} value={v.id}>
              {v.vehicleNumber} - {v.model} ({v.type}) - ₹{v.pricePerDay}/day
            </option>
          ))}
        </select>
        <button type="submit">Book Vehicle</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default CreateBooking;
