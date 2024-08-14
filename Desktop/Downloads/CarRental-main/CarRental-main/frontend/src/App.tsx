import Home from './pages/Home'
import './App.css'
import Navbar from './components/global/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Car from './components/Car/Car';
import Sign from './pages/SignUp';
function App() {

  

  return (
    <>
    
          <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>  }/>
        <Route path='/car' element={<div style={{display:'flex' ,flexDirection:'column', alignItems:'center',justifyContent:'center', padding:"30px 30px"}}> <Navbar/>
        <Car/></div>}></Route>
        <Route path='/signUp' element={<Sign/>}></Route>
      </Routes>
    </BrowserRouter>
     
   
  

     
    </>
  )
}

export default App
