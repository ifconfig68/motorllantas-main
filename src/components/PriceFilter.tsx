// src/components/PriceFilter.tsx
import React from 'react';
import './PriceFilter.css';

const PriceFilter: React.FC = () => {
  return (
    <div className="price-filter">
        <select>
            <option value="">Precio</option>
        </select>
    </div>
  );
};

export default PriceFilter;
