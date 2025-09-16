import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Left - Logo & Title */}
      <div className="navbar-left">
        <img className='logo' src={assets.logo} alt="Logo" />
        <h3 className="title">Admin Panel</h3>
      </div>

      {/* Right - Profile */}
      <div className="navbar-right">
        <img className='profile' src={assets.profile_image} alt="Profile" />
      </div>
    </div>
  )
}

export default Navbar
