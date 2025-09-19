import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar2.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [showMenu, setShowMenu] = useState(false); // 👈 toggle state

  const {getTotalCartAmount, token, setToken} = useContext(StoreContext);

  const navigate = useNavigate();

  const logOut = () =>{
    localStorage.removeItem("token");
    setToken(""); 
    navigate("/"); 
  }

  

  return (
    <>
      {/* 🔹 Offer Strip */}
      <div className="offer-strip">
        10% OFF on all orders above ₹500 | Limited Time Offer
      </div>

      {/* 🔹 Navbar */}
     <div className="navbar2">
        {/* Left - Hamburger */}
        <div className="navbar-left">
          <img
            src={assets.hamburger_icon2}
            alt="Menu"
            className="logo"
            onClick={() => setShowMenu(!showMenu)} // toggle open/close
          />
        </div>

        
        {/* Center - Brand OR Menu */}
        <div className="navbar-center">
          {!showMenu ? (
            <h3 className="brand-title">The Good Habit</h3>
          ) : (
            <ul className={`navbar-menu ${showMenu ? "show" : ""}`}>
              {/* ❌ Close Icon (Only Mobile) */}
              <li className="close-menu" onClick={() => setShowMenu(false)}>✖</li>

              <li>
                <Link
                  to="/"
                  onClick={() => setMenu("home")}
                  className={menu === "home" ? "active" : ""}
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#our-story"
                  onClick={() => setMenu("ourstory")}
                  className={menu === "ourstory" ? "active" : ""}
                >
                  Our story
                </a>
              </li>
              <li>
                <a
                  href="#track-order"
                  onClick={() => setMenu("trackorder")}
                  className={menu === "trackorder" ? "active" : ""}
                >
                  Track order
                </a>
              </li>
              <li>
                <a
                  href="#review"
                  onClick={() => setMenu("review")}
                  className={menu === "review" ? "active" : ""}
                >
                  Review
                </a>
              </li>
            </ul>
          )}
        </div>



        {/* Right - Icons */}
        <div className="navbar-right">
          <img src={assets.search_icon} alt="Search" className="icon" />
          

           <div className="navbar-basket-icon">
            <div className={getTotalCartAmount()===0? "" : "dot"} ></div>
              <Link to="/cart"> 
                <img src={assets.basket_icon} alt="Cart" className="icon" />  
              </Link>
            </div>
         
          { !token?<img src={assets.user_icon}   alt="User"  className="icon"  
                  onClick={() => setShowLogin(true)} />  
            :<div className="nav-bar-profile">
                  <img src={assets.profile_image} 
                  alt="" />
                  <ul className="nav-profile-dropdown">
                    <li>
                      <img src={assets.orders} />
                      <p>Orders</p>
                    </li>
                    <hr/>
                    <li onClick={logOut}> 
                      <img src={assets.logout} /> 
                      <p>Logout</p>  
                    </li>
                  </ul>
                 </div>}

        </div>
      </div>
    </>
  );
};

export default Navbar;
