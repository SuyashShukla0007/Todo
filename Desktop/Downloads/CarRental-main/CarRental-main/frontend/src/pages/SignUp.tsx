import './SignUp.css'
import img1 from  '../assets/aston.jpeg'
import img2 from '../assets/porsche.jpg'
import img4 from '../assets/gtr.jpeg'




import { useState,useEffect } from 'react'
const SignUp = () => {



  const images = [
   img1,
   img2,
   img4,
   
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {

   

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);



  return (
    <div id='SignUpBody'>
      <div id="left" 
       style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center ',
         
        transition: 'background-image 1s ease-in',
       
        backgroundRepeat: 'no-repeat'
      }}>
        

        
      </div>
      <div id="right">
        <div id="SignUpBox">
          <h1 style={{color:'rgb(235, 232, 232)',fontFamily:"monospace",marginBottom:"20px"}}>Get Your Free Account Now.</h1>
          <p style={{color:'gray',fontSize:"18px",width:"80%",marginBottom:"30px",fontFamily:"serif"}}>Let’s get you all set up so you can verify your personal account and begin setting up your profile.</p>
          <div id="inputContainers">
          <div className="lineSignup">
            <div className="inputSign">
            <label htmlFor="" className='labelSignUp'>
              First name </label>
              <input type="text" placeholder='Suyash'  className="inputBoxSign"/>
              </div>
              <div className="inputSign">
            <label htmlFor="" className='labelSignUp'>
              Last name
            </label>
              <input type="text" placeholder='Shukla'  className="inputBoxSign"/>
            
            </div>
          </div>

          <div className="lineSignup">
          <div className="inputSign">
            <label htmlFor="" className='labelSignUp'>Phone number</label>
              <input type="text" placeholder='XXX-XX-XXXX-XXX' className="inputBoxSign"/>
            
            </div>
            <div className="inputSign">
            <label htmlFor="" className='labelSignUp'>Email address</label>
              <input type="text" placeholder='example@gmail.com'  className="inputBoxSign"/>
            
            </div>
          </div>

          <div className="lineSignup">
          <div className="inputSign">
            <label htmlFor="" className='labelSignUp'>Enter your password</label>
              <input type="text" placeholder='Enter your password' className="inputBoxSign"/>
            
            </div>
            <div className="inputSign">
            <label htmlFor="" className='labelSignUp'>Confirm password </label>
              <input type="text" placeholder='Confirm password'  className="inputBoxSign"/>
           
            </div>
          </div>

    </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp