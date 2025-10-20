import React, { useState } from 'react';
import './VehicleSelector.css';

import carIcon from '../assets/img/1 car.png';
import truckIcon from '../assets/img/2 camiones.png';
import tractorIcon from '../assets/img/3 OTR.png';
import motorcycleIcon from '../assets/img/4 moto.png';
import atvIcon from '../assets/img/5 ATV.png';

const vehicles = [
  { name: 'CARROS, CAMPEROS Y CAMIONETAS', icon: carIcon, type: 'car' },
  { name: 'CAMIONES, BUSES Y TRACTOMULAS', icon: truckIcon, type: 'truck' },
  { name: 'OTR E INDUSTRIAL', icon: tractorIcon, type: 'otr' },
  { name: 'MOTOCICLETAS', icon: motorcycleIcon, type: 'motorcycle' },
  { name: 'CUATRIMOTOS ATV, UTV Y KARTS', icon: atvIcon, type: 'atv' },
];

const VehicleSelector: React.FC = () => {
  const [selected, setSelected] = useState(vehicles[0].name);

  return (
    <div className="vehicle-selector-container">
      <div className="header">
        <span className="step-number">1</span>
        <span className="step-title">ELIGE TU VEHÍCULO</span>
      </div>
      <div className="vehicle-options">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.name}
            className={`vehicle-option vehicle-type-${vehicle.type} ${selected === vehicle.name ? 'selected' : ''}`}
            onClick={() => setSelected(vehicle.name)}
          >
            <div className="icon">
              <img src={vehicle.icon} alt={vehicle.name} />
            </div>
            <div className="text">{vehicle.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleSelector;
