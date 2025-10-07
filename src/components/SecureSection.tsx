import React from 'react';
import './SecureSection.css';
import seguro from '../assets/img/seguro.jpg';

function SecureSection() {
  return (
    <div className="secure-section">
      <img src={seguro} alt="Secure payment" />
    </div>
  );
}

export default SecureSection;
