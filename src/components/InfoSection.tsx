import React from 'react';
import './InfoSection.css';
import photocar from '../assets/img/photocar.JPG';

function InfoSection() {
  return (
    <div className="info-section">
      <div className="info-content">
        <div className="info-image">
          <img src={photocar} alt="Offroad truck" />
        </div>
        <div className="info-text">
          <h2>LLANTAS PARA CADA AVENTURA</h2>
          <p>
            Encuentra la llanta perfecta para tu vehículo, sin importar el terreno.
            Explora nuestra amplia selección de llantas de alta calidad para autos,
            camionetas, OTR, motos y cuatrimotos.
          </p>
          <a href="#" className="button">VER CATÁLOGO</a>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
