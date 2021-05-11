import React from 'react'
import './Navbar.scss'
import {Link, NavLink} from 'react-router-dom';
import logo from '../../assets/logo/logo.jpg'
const Navbar = () => {
    return (
        <div className ="navbar">
          <img src ={logo} className = "navbar__logo" alt ="Cologne" />
          <ul className ="navbar__content">
            <li className ="navbar__text">Explore Scents</li>
            <li>Pricing Plans</li>
            <li className ="navbar__text">About Us</li>
            <li>Cart</li>
            <li className ="navbar__text">Log In</li>
          </ul>
          
        </div>
    )
}

export default Navbar
