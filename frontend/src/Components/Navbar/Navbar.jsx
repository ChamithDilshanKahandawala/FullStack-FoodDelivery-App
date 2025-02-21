import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [menu,setMenu] =useState("home");
  return (
    <div className="navbar">
        <img src={assets.logo} className='logo'/>
        <ul className="navbar_menu">
            <Link to='/' onClick={()=> setMenu("home")} className={menu== "home"?"active":""}>Home</Link >
            <a href='#exploremenu' onClick={()=> setMenu("menu")} className={menu== "menu"?"active":""}>Menu</a>
            <a href='#AppDownload'onClick={()=> setMenu("mobile_app")} className={menu== "mobile_app"?"active":""}>Mobile-App</a>
            <a href='#footer' onClick={()=> setMenu("contact_us")} className={menu== "contact_us"?"active":""}>Contact US</a>

            
        </ul>
        <div className="navbar_right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar_searchIcon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot">

                </div>
            </div>
            <button>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar