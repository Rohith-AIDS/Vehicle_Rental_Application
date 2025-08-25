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







function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bikes" element={<BikeListPage />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/blog" element={<Blog />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cancellation" element={<Cancellation />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/login" element={<Loginpage />} />
    
    </Routes>
  );
}

export default App;
