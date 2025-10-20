import React from 'react';
import './Motorpost.css';
import motorpost from '../assets/img/motorpost.jpg';

function Motorpost() {
  return (
    <div className="motorpost-wrapper">
        <div className="motorpost-container">
            <img src={motorpost} alt="Motorpost" />
        </div>
    </div>
  );
}

export default Motorpost;
