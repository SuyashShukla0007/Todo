import React from 'react'
import Sign from './pages/Sign'
import News from './pages/News'
import Navbar from './components/Navbar'
import Card from './components/Card'
const App = () => {
  return (
    <>
    <div className='flex'>
  <Navbar></Navbar>
   <News></News>
   </div>
   </>
  )
}

export default App