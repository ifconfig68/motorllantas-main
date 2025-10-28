
import React from 'react';
import './FilterControls.css';

interface FilterControlsProps {
  onSortChange: (sortOrder: string) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({ onSortChange }) => {
  return (
    <div className="filter-controls">
      <div className="sort-control">
        <label htmlFor="sort-order">Ordenar por: </label>
        <select id="sort-order" onChange={(e) => onSortChange(e.target.value)}>
          <option value="default">Por defecto</option>
          <option value="price-asc">Precio: más bajo a más alto</option>
          <option value="price-desc">Precio: más alto a más bajo</option>
          <option value="name-asc">Nombre: A-Z</option>
          <option value="name-desc">Nombre: Z-A</option>
        </select>
      </div>
    </div>
  );
};

export default FilterControls;
