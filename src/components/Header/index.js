import React, {useState} from 'react'
import { Link } from "react-router-dom";
import './index.css'

const Header = () => {
    const [color,setColor] = useState(false);
                const changeColor = () => {
                  if (window.scrollY >= 100){
                      setColor(true)
                  } else {
                      setColor(false)
                  }
                }
    window.addEventListener("scroll",changeColor)
  
    return (
    <nav className= {color ? 'nav-container nav-container-bg' : "nav-container"}>
        <Link className="link-style" to='/'>
            <img className="nav-logo" src="https://ww1.prweb.com/prfiles/2010/12/14/3898294/travelslogo.jpg" alt="travelLogo"/>
        </Link>
        <p className='description'>Private tailor-made journeys of a lifetime</p>
        <ul className='menu-container'>
            <li>
                <Link to='/' className="link-style" >
                    Home
                </Link>
            </li>
            <li>
                <Link to='/admin' className="link-style" >
                    Admin
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Header