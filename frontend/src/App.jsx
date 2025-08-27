import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import BikeListPage from './pages/BikeListPage';
import Aboutpage from './pages/Aboutpage';
import Blog from './pages/Blog';
import Terms from './pages/Terms';
import Cancellation from './pages/cancellation';
import Privacy from './pages/Privacy';
import Loginpage from './pages/Loginpage';
import AdminPage from './pages/AdminPage';
import VehicleList from './components/Vehiclelist';

function App() {
  return (
    <Routes>
      <Route path="/" element={<VehicleList />} />
      <Route path="/bikes" element={<BikeListPage />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/blog" element={<Blog />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cancellation" element={<Cancellation />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/home" element={<HomePage />} />
    
    </Routes>
  );
}

export default App;
