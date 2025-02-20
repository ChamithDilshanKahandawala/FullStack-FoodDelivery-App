import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className="footer_content">
            <div className="footerContent_left">
                <img src={assets.logo} alt="" srcset="" />
                <p>Content</p>
                <div className="footerSocial_Icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />

                </div>
            </div>

            <div className="footerContent_Center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footerContent_Right">
                <h2>GET IN TOUCH</h2>
                <li>+94 78 256 3766</li>
                <li>dilshanKmc92@gmail.com</li>
                
            </div>
        </div>
        <hr />
        <p className="footer_copyright">
            Copyright 2024 © Tomato.com - All Right Reserved
        </p>

    </div>
  )
}

export default Footer