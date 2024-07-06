import React from 'react';
import Sign from './pages/Sign';
import News from './pages/News';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    
    <Routes >
      <Route  path="/news" element={
        <div className='flex'>

        <Navbar />
        <News />
        </div>} /> {/* Render Navbar on all routes */}
     
      <Route path="/sign" element={<Sign />} />
    </Routes>
  );
}

export default App;
