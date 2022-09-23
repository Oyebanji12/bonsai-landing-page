import React, { useState } from 'react'
import image from "./5e5fd7c602ca7cd432feb68e_bonsai-logo.svg"
import "./nav.css"
import {GiHamburgerMenu} from "react-icons/gi"
import {FaTimes} from "react-icons/fa"


const Nav = () => {
  const [isMobile, setIsMobile]= useState(false)
  
  return (
    <div className='pt'>
        <nav>   
        <img src={image} alt=""  className='img-logo'/>
            <ul className={isMobile ? "nav-link-mobile" : "nav-link"}>
                <li className='link'>product</li>
                <li className='link'>Templates</li>
                <li className='link'>pricing</li>
                <li className='link'>Review</li>
            </ul>
            <button className='btn-1'>log in</button>
            <button className='btn-2'>start free</button>
            <button className='mobile-menu-icon' onClick={()=> setIsMobile(!isMobile)} >
              {isMobile ? <FaTimes /> : <GiHamburgerMenu />}
            </button>
        </nav>
    </div>
  )
}

export default Nav