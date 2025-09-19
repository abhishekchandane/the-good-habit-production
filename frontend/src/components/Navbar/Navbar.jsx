import React, { useState } from 'react'
import './Navbar.css'
import {assets}from '../../assets/assets'
import { Link} from 'react-router-dom';

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] =  useState("home");

  return (
    <div className='navbar'> 
      {/* <img src={assets.logo_} alt="" className='logo' /> */}
      <Link to='/'>  <h3>The Good Habit</h3> </Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick= { ()=>setMenu("home") } className={menu==="home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick= { ()=>setMenu("menu") } className={menu==="menu"?"active":""}>menu</a> 
        <a href='#blog-section' onClick= { ()=>setMenu("blog") } className={menu==="blog"?"active":""}>blog</a> 
        <a href='#explore-menu' onClick= { ()=>setMenu("about") } className={menu==="about"?"active":""}>about</a> 
        <a href='#explore-menu' onClick= { ()=>setMenu("contact") } className={menu==="contact"?"active":""}>contact </a> 
      </ul>

        <div className='navbar-right'>
            <img src={assets.search_icon} alt="" className='search' />
            <div className='navbar-search-icon'>
                <Link to='/cart'>
                  <img src={assets.basket_icon} alt="" className='basket' />
                </Link>
                <div className="dot"></div>
            </div>

            <button onClick={()=>setShowLogin(true)} >Sign in</button>
        </div>

    </div>
  )
}

export default Navbar
