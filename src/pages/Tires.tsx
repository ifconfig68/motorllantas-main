
import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Tires.css';
import PriceFilter from '../components/PriceFilter';
import FilterControls from '../components/FilterControls';

const formatPrice = (price: number) => {
  return `$ ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};

const Tires: React.FC = () => {
  const [priceRange, setPriceRange] = useState<[number, number] | null>(null);
  const [sortOrder, setSortOrder] = useState('default');

  const { minPrice, maxPrice } = useMemo(() => {
    if (products.length === 0) {
      return { minPrice: 0, maxPrice: 1000000 };
    }
    const prices = products.map(p => p.price);
    return {
      minPrice: Math.min(...prices),
      maxPrice: Math.max(...prices),
    };
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let newFilteredProducts = [...products];

    if (priceRange) {
      newFilteredProducts = newFilteredProducts.filter(
        p => p.price >= priceRange[0] && p.price <= priceRange[1]
      );
    }

    switch (sortOrder) {
      case 'price-asc':
        newFilteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        newFilteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        newFilteredProducts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'name-desc':
        newFilteredProducts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    return newFilteredProducts;
  }, [priceRange, sortOrder]);

  return (
    <div className="tires-container">
      <div className="filter-controls-container">
        <PriceFilter 
            min={minPrice} 
            max={maxPrice} 
            onChange={setPriceRange} 
        />
        <FilterControls onSortChange={setSortOrder} />
      </div>
      <div className="product-count">
        Mostrando 1-{filteredAndSortedProducts.length} de {filteredAndSortedProducts.length} resultados
      </div>
      <div className="product-grid">
        {filteredAndSortedProducts.map((product, index) => (
          <ProductCard
            key={index}
            {...product}
            price={formatPrice(product.price)}
            oldPrice={product.oldPrice ? formatPrice(product.oldPrice) : undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default Tires;
