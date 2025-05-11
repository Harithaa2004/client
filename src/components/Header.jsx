import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";
import leaderboardIcon from "../assets/leaderboard.png";
import giftIcon from "../assets/gift.png";
import profileIcon from "../assets/profile.png";

const Header = () => {
  return (
    <nav className="header">
      <div className="left-section">
        <img src={logo} alt="Logo" className="logo-image" /> 
      </div>
      <div className="right-section">
        <img
          src={leaderboardIcon}
          alt="Leaderboard Icon"
          className="icon leaderboard-icon" 
        />
        <img
          src={giftIcon}
          alt="Gift Icon"
          className="icon gift-icon clickable" 
        />
        <img
          src={profileIcon}
          alt="User Profile"
          className="profile-icon clickable"
        />
      </div>
    </nav>
  );
};

export default Header;