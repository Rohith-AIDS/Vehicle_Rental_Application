import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VehicleList from "./components/VehicleList";
import BookingList from "./components/BookingList";
import CreateBooking from "./components/CreateBooking";
 
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Vehicles</Link> | <Link to="/bookings">Bookings</Link> | <Link to="/create-booking">Create Booking</Link>
      </nav>
      <Routes>
        <Route path="/" element={<VehicleList />} />
        <Route path="/bookings" element={<BookingList />} />
        <Route path="/create-booking" element={<CreateBooking />} />
      </Routes>
    </Router>
  );
}
 
export default App;