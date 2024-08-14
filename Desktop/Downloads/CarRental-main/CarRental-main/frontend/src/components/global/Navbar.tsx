import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div id="box">
      
    <ul id="head">
    <li  ><p id="logo">CARHUB</p>
    </li>
    <NavLink to='/' className='navi'>Home Page</NavLink>
    <NavLink to='/rent' className='navi'>Rent Car</NavLink>
    <NavLink to='/sell' className='navi'>Sell Car</NavLink>
    <NavLink  to='Buy' className='navi'>Buy Car</NavLink>

<li><NavLink to='/signUp'><button id='sign'>Sign In</button></NavLink></li> 
   </ul>
  
</div>
  )
}

export default Navbar