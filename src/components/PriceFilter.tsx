import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './PriceFilter.css';

interface PriceFilterProps {
  min: number;
  max: number;
  onRangeChange: (values: [number, number]) => void;
}

const formatPrice = (price: number) => {
    return `$${price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};

const PriceFilter: React.FC<PriceFilterProps> = ({ min, max, onRangeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValues, setCurrentValues] = useState<[number, number]>([min, max]);

  // This effect resets the slider when the possible range changes (e.g., navigating pages)
  useEffect(() => {
    setCurrentValues([min, max]);
  }, [min, max]);

  const handleSliderChange = (values: number | number[]) => {
    if (Array.isArray(values)) {
      setCurrentValues(values as [number, number]);
    }
  };

  const handleFilterClick = () => {
    onRangeChange(currentValues);
    setIsOpen(false);
  };

  const handleClearClick = () => {
    setCurrentValues([min, max]);
    onRangeChange([min, max]);
    setIsOpen(false);
  };

  return (
    <div className="price-filter-container">
      <button className="price-filter-button" onClick={() => setIsOpen(!isOpen)}>
        Precio <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
      </button>
      {isOpen && (
        <div className="price-filter-dropdown">
          <div className="slider-container">
            <Slider
              range
              min={min}
              max={max}
              value={currentValues}
              onChange={handleSliderChange}
            />
          </div>
          <div className="price-display-container">
            <span className="price-range-display">
              {formatPrice(currentValues[0])} - {formatPrice(currentValues[1])}
            </span>
            <div className="filter-buttons">
                <button className="clear-filter-button" onClick={handleClearClick}>
                    LIMPIAR
                 </button>
                <button className="apply-filter-button" onClick={handleFilterClick}>
                    FILTRO
                </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceFilter;
