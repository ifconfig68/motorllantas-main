
import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './FilterControls.css';

interface FilterControlsProps {
  onFilterChange: (filters: { priceRange?: [number, number]; sortOrder?: string }) => void;
  products: any[];
}

const FilterControls: React.FC<FilterControlsProps> = ({ onFilterChange, products }) => {
  const prices = products.length > 0 ? products.map(p => p.price) : [0];
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);
  const [sortOrder, setSortOrder] = useState('default');

  const handlePriceRangeChange = (value: number | number[]) => {
      setPriceRange(value as [number, number]);
  }
  
  const applyPriceFilter = (value: number | number[]) => {
    onFilterChange({ priceRange: value as [number, number], sortOrder });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSortOrder = e.target.value;
    setSortOrder(newSortOrder);
    onFilterChange({ priceRange, sortOrder: newSortOrder });
  };

  return (
    <div className="filter-controls">
        <div className="price-filter-container">
          <label>Rango de precios:</label>
          <Slider
            range
            min={minPrice}
            max={maxPrice}
            value={priceRange}
            onChange={handlePriceRangeChange}
            onAfterChange={applyPriceFilter}
          />
          <div className="price-range-labels">
            <span>${priceRange[0].toLocaleString()}</span>
            <span>${priceRange[1].toLocaleString()}</span>
          </div>
        </div>

      <div className="sort-controls">
        <label htmlFor="sort-order">Ordenar por:</label>
        <select id="sort-order" value={sortOrder} onChange={handleSortChange}>
          <option value="default">Por defecto</option>
          <option value="price-asc">Precio: de menor a mayor</option>
          <option value="price-desc">Precio: de mayor a menor</option>
          <option value="name-asc">Nombre: de A a Z</option>
          <option value="name-desc">Nombre: de Z a A</option>
        </select>
      </div>
    </div>
  );
};

export default FilterControls;
