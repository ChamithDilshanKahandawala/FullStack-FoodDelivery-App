import React from 'react'
import './LoginPopup.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currentState,SetCurrentState] = useState("Log In")
  return (
    <div className="LoginPopup">
        <form className="login_Popup_Container">
            <div className="login_popup_title">
                <h2>
                    {currentState}
                </h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login_popup_inputs">
                
                {currentState==="Log In"?<></>:<input type="text" placeholder='Your Name:' required name="" id="" />}
                <input type="email" placeholder='Your Email:' required/>
                <input type="password" placeholder='Password' required/>

            </div>
            <button>{currentState==="Sign Up"?"Create Account":"Log In"}</button>
            <div className="Login_poppup_condition">
                <input type="checkbox" required />
                <p>By Continuing, I will Agree to Term & Conditions and Privacy policies</p>
            </div>
            {currentState==="Log In"?<p>Create a new account? <span onClick={()=>SetCurrentState("Sign Up")}>Click Here</span></p>
            :<p>Already have an account? <span onClick={()=>SetCurrentState("Log In")}>Login Here</span></p>
            }
            
            
        </form>
    </div>
  )
}

export default LoginPopup