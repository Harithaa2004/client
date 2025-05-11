import React from 'react';
import './NavBar.css';
import homeIcon from '../assets/home.png';       
import earnIcon from '../assets/earn.png';       
import shieldIcon from '../assets/shield.png';    
import walletIcon from '../assets/wallet.png';  

const NavBar = () => {
  return (
    <nav className="bottom-navbar">
      <ul className="nav-list">
        <li className="nav-item active"> 
          <img src={homeIcon} alt="Tournament" className="nav-icon" />
        </li>
        <li className="nav-item">
          <img src={earnIcon} alt="Earn" className="nav-icon" />
        </li>
        <li className="nav-item">
          <img src={shieldIcon} alt="Tournament" className="nav-icon" />
        </li>
        <li className="nav-item">
          <img src={walletIcon} alt="Wallet" className="nav-icon" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;