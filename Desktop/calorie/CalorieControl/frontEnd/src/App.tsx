import React from 'react';
import './App.css'
import Sign from './pages/Sign';
import News from './pages/News';
import Navbar from './components/Navbar';
import Card from './components/Card';
import { Routes, Route } from 'react-router-dom';
import BarChart from './components/Chart/Bar'
import MealCard from './components/MealCard';
import Bmi from './pages/Bmi';
import SuccessAlert from './components/accessories/SuccessAlert';
import Calorie from './pages/Calorie';
import Meals from './pages/Meals';
const App = () => {
  return (
    
    <Routes >
      <Route  path="/news" element={
        <div className='flex'>

        <Navbar />
        <News />
        </div>} /> {/* Render Navbar on all routes */}
     
      <Route path="/" element={
        <div className=' flex '>
        <Navbar/>
        <div className='w-[300px]'>
        <Calorie />
        </div>
        </div>
        } />

        <Route path='/meals' element={
          <div className=' flex '>
          <Navbar/>
          <div className='w-[300px]'>
          <Meals />
       
          </div>
          </div>
          }></Route>


        <Route path='/sign' element={<Sign/>}></Route>

        <Route path='/bmi' element={
          <div className='flex '>
          <Navbar/>
          <div className='h-[30%] mt-[10%]  ml-[30%]'>
          <Bmi/>
          </div>
          </div>
        }/>
    </Routes>
  );
}

export default App;