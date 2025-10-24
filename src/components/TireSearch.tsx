import React, { useState } from 'react';
import './TireSearch.css';
import plateIcon from '../assets/img/placa.png';

const searchOptions = [
  { name: 'PLACA', icon: plateIcon, type: 'plate' },
  { name: 'MARCA DE VEHÍCULO', type: 'brand' },
  { name: 'MEDIDA DE LLANTA', type: 'size' },
  { name: 'MARCA DE LLANTA', type: 'tire-brand' },
];

const TireSearch: React.FC = () => {
  const [selected, setSelected] = useState(searchOptions[0].name);
  const [plate, setPlate] = useState('');
  const [vehicle, setVehicle] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!plate.trim()) {
      setError('Por favor ingresa una placa');
      return;
    }
    setError('');
    setLoading(true);
    setVehicle(null);

    try {
      const response = await fetch(`http://localhost:3000/api/vehicle/${plate}`);
      if (!response.ok) throw new Error('Error al obtener datos');
      const data = await response.json();
      setVehicle(data);
    } catch (err) {
      setError('No se encontró información del vehículo');
    } finally {
      setLoading(false);
    }
  };

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
            {option.icon && (
              <div className="icon">
                <img src={option.icon} alt={option.name} />
              </div>
            )}
            <div className="text">{option.name}</div>
          </div>
        ))}
      </div>

      {selected === 'PLACA' && (
        <div className="search-input">
          <input
            type="text"
            placeholder="Ingresa la placa del vehículo..."
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>
      )}

      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {vehicle && (
        <div className="vehicle-info">
          <h3>Información del vehículo</h3>
          <div className="vehicle-card">
            <p><b>Placa:</b> {vehicle.placa}</p>
            <p><b>Marca:</b> {vehicle.brand}</p>
            <p><b>Modelo:</b> {vehicle.modelo}</p>
            <p><b>Año:</b> {vehicle.anio}</p>
          </div>
          <button className="tire-button">Ver llantas disponibles</button>
        </div>
      )}
    </div>
  );
};

export default TireSearch;

