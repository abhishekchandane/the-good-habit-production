import React, {   useContext, useState} from 'react'

import './LoginPopup.css'
import {assets} from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';



const LoginPopup = ({setShowLogin}) => {

    const {url, setToken} = useContext(StoreContext);

    const [currState,setCurrState] = useState("Login");

    const [data, setData] = useState({
        name:"",
        email:"",
        password:"",
    })

    const onChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value
        setData( data=>( {...data,[name]:value } ) )
    }

    const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
        newUrl += "/api/user/login";
    } else {
        newUrl += "/api/user/register";
    }

    try {
        const response = await axios.post(newUrl, data);

        // 👇 Yahin dalna hai
        console.log("Login Response:", response.data);

        if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
        } else {
        alert(response.data.message);
        }
    } catch (error) {
        console.error("Login error:", error);
        alert("Something went wrong, please try again.");
    }
    };




   

  return (
    <div className='login-popup'> 
        <form onSubmit={onLogin}  className="login-popup-container">
            <div className="login-popup-title">
                <h2 > {currState} </h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>

            <div className="login-popup-inputs">
                {currState==="Login"? <></> : <input name='name' onChange={onChangeHandler}  value={data.name} type="text" placeholder='Your Name' required /> }
                <input name='email' onChange={onChangeHandler} value={data.email}  type="email" placeholder='Your Email' required />
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='  Password' required />
            </div>

            <button type='submit' > {currState==="Sign Up"?"Create Account":"Login"} </button>

            <div className='login-popup-condition'>
                <input type="checkbox" required />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            {currState==="Login"
                ? <p className='login-popup-forgot'>
                    Create a New Account ? 
                    <span onClick={()=>setCurrState("Sign Up")}> Click Here</span>
                   </p>
                   
                : <p className='login-popup-forgot'>
                    Already have an Account ? 
                    <span onClick={()=>setCurrState("Login")} > Login Here</span>
                  </p> 
                }
    
        </form>


    </div>
  )
}

export default LoginPopup
