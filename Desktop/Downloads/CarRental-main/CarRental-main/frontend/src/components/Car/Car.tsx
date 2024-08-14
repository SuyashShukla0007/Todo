import './Car.css'
import img from '../../assets/aston.jpeg'
const Car = () => {
  
  return (
    <div id='carPageBody'>
         
      <div id="images">
      <div >
    <img src={img} alt="" className='largeImgCar imgCar'/>
      </div>
      <div className='smallCar'>
        <img src={img} alt="" className='imgCar imgCarsmall'  />
        <img src={img} alt="" className='imgCar imgCarsmall'/>
        <img src={img} alt=""  className='imgCar imgCarsmall'/>
      </div>
      </div>
      <div id="carInfo">

      </div>
      <div id="carDescription">

      </div>
      <div id="CarRatings">

      </div>
    </div>
  )
}

export default Car