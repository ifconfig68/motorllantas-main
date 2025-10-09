
// src/pages/Tires.tsx
import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Tires.css';
import FilterControls from '../components/FilterControls';

const formatPrice = (price: number) => {
  return `$ ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};

const Tires: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (filters: { priceRange?: [number, number]; sortOrder?: string }) => {
    let newFilteredProducts = [...products];

    if (filters.priceRange) {
      newFilteredProducts = newFilteredProducts.filter(
        (p) => p.price >= filters.priceRange![0] && p.price <= filters.priceRange![1]
      );
    }

    if (filters.sortOrder) {
      switch (filters.sortOrder) {
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
    }

    setFilteredProducts(newFilteredProducts);
  };

  return (
    <div className="tires-page">
      <FilterControls onFilterChange={handleFilterChange} products={products} />
      <div className="product-count">
        Mostrando 1-{filteredProducts.length} de {filteredProducts.length} resultados
      </div>
      <div className="product-grid">
        {filteredProducts.map((product, index) => (
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
