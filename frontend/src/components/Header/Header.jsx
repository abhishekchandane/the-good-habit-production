import React from "react";
import "./Header.css";
import foodImage from "../../assets/food.jpg"; // 👈 अपनी image का सही path डालें

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        {/* Left Side Content */}
        <div className="header-left">
          <h1 className="header-title">
            Healthy Snacking, <br /> Tasty & Clean
          </h1>
          <p className="header-subtitle">
            Stay consistent with workouts, meditation, and mindful eating. <br />
            A small step today makes a big change tomorrow
          </p>
          <button className="header-btn">Order Now</button>
        </div>

        {/* Right Side Content */}
        <div className="header-right">
          <img src={foodImage} alt="Food" className="header-image" />
        </div>
      </div>
    </div>
  );
};

export default Header;
