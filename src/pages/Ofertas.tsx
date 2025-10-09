import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import FilterControls from '../components/FilterControls';
import { products } from '../data/products';
import './Ofertas.css'; // Usaremos un nuevo CSS

const Ofertas: React.FC = () => {
  const [sortOrder, setSortOrder] = useState('default');
  const [priceRange, setPriceRange] = useState<[number, number] | null>(null);

  const discountedProducts = useMemo(() => products.filter(p => p.discount && p.discount > 0), []);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = discountedProducts;

    if (priceRange) {
      filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    }

    switch (sortOrder) {
      case 'price-asc':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...filtered].sort((a, b) => b.price - a.price);
      case 'name-asc':
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return [...filtered].sort((a, b) => b.name.localeCompare(a.name));
      default:
        return filtered;
    }
  }, [sortOrder, priceRange, discountedProducts]);

  return (
    <div className="page-container ofertas-page">
        <div className="page-title-container">
            <h1 className="page-title-text">OFERTAS</h1>
        </div>

        <FilterControls 
            onSortChange={setSortOrder} 
            onPriceFilterChange={setPriceRange} 
            resultsCount={filteredAndSortedProducts.length} 
        />
        
        <div className="product-grid">
            {filteredAndSortedProducts.map(product => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    </div>
  );
};

export default Ofertas;
