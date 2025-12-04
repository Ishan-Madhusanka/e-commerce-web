import React from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png';
import Cart_icon from '../Assets/Cart_icon.png';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt=""/>
            <p>SHOPPER</p>
        </div>
    </div>
  )
}
