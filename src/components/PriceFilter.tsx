
import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './PriceFilter.css';

interface PriceFilterProps {
    min: number;
    max: number;
    onChange: (values: [number, number]) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ min, max, onChange }) => {
    const [values, setValues] = useState<[number, number]>([min, max]);
    const [isOpen, setIsOpen] = useState(false);

    const handleSliderChange = (newValues: number | number[]) => {
        if (Array.isArray(newValues)) {
            setValues(newValues as [number, number]);
        }
    };

    const handleFilterClick = () => {
        onChange(values);
        setIsOpen(false);
    };

    return (
        <div className="price-filter-container">
            <div className="price-filter-header" onClick={() => setIsOpen(!isOpen)}>
                <span>Precio</span>
                <span className={`arrow ${isOpen ? 'up' : 'down'}`}></span>
            </div>
            {isOpen && (
                <div className="price-filter-body">
                    <Slider
                        range
                        min={min}
                        max={max}
                        value={values}
                        onChange={handleSliderChange}
                        className="price-slider"
                    />
                    <div className="price-display-container">
                        <span className="price-range">{`$${values[0].toLocaleString()} - $${values[1].toLocaleString()}`}</span>
                        <button onClick={handleFilterClick} className="filter-button">FILTRO</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PriceFilter;
