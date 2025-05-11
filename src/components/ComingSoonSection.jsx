import React from 'react';
import './ComingSoonSection.css';
import comingSoon1 from '../assets/spinwheel.png';

const ComingSoonSection = () => {
  return (
    
    <div className="coming-soon-container">
      <h2>Coming Soon</h2>
      <div className="coming-soon-grid">
        <div className="coming-soon-card">
          <img src={comingSoon1} alt="Coming Soon Game 1" />
        </div>
      </div>
    </div>
  );
};

export default ComingSoonSection;