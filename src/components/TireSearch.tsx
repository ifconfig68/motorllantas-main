import React, { useState } from 'react';
import './TireSearch.css';
import plateIcon from '../assets/img/placa.png';

<<<<<<< HEAD

=======
>>>>>>> upstream/main
const searchOptions = [
  { name: 'PLACA', icon: plateIcon, type: 'plate' },
  { name: 'MARCA DE VEHÍCULO', type: 'brand' },
  { name: 'MEDIDA DE LLANTA', type: 'size' },
  { name: 'MARCA DE LLANTA', type: 'tire-brand' },
];

const TireSearch: React.FC = () => {
  const [selected, setSelected] = useState(searchOptions[1].name);

  return (
    <div className="tire-search-container">
      <div className="header">
        <div className="step-number">2</div>
        <div className="step-title">BUSCA TU LLANTA POR:</div>
      </div>
      <div className="search-options">
        {searchOptions.map((option) => (
          <div
            key={option.name}
            className={`search-option ${selected === option.name ? 'selected' : ''} ${!option.icon ? 'no-icon' : ''}`}
            onClick={() => setSelected(option.name)}
          >
            {option.icon && <div className="icon"><img src={option.icon} alt={option.name} /></div>}
            <div className="text">{option.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TireSearch;
