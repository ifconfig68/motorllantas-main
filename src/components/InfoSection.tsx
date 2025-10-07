import React from 'react';
import './InfoSection.css';
import fotocarro from '../assets/img/fotocarro.jpg';

function InfoSection() {
  return (
    <div className="info-section">
      <img src={fotocarro} alt="Offroad truck" />
    </div>
  );
}

export default InfoSection;
