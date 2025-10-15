// src/pages/Offers.tsx
import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Offers.css'; // Using Offers.css
import bannerm from '../assets/img/bannerm.jpg';

const formatPrice = (price: number) => {
  return `$ ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};

const Offers: React.FC = () => {
  const discountedProducts = useMemo(() => products.filter(p => p.oldPrice), []);
  const [filteredProducts, setFilteredProducts] = useState(discountedProducts);
  const [sortOrder, setSortOrder] = useState('default');

  const handleSortChange = (newSortOrder: string) => {
    setSortOrder(newSortOrder);
    applyFiltersAndSorting(newSortOrder);
  };

  const applyFiltersAndSorting = (currentSortOrder: string) => {
    let newFilteredProducts = [...discountedProducts];

    // Sorting logic
    switch (currentSortOrder) {
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
        // No change for 'default'
        break;
    }
    setFilteredProducts(newFilteredProducts);
  };

  return (
    <div className="offers-page">
      <div className="banner-container">
        <img src={bannerm} alt="Banner de ofertas" className="offers-banner" />
      </div>
      <div className="controls-wrapper">
        <div className="filter-group-left">
          <div className="price-filter">
            <select>
              <option value="all">Precio</option>
              {/* Add price range options here if needed */}
            </select>
          </div>
        </div>
        <div className="filter-group-right">
            <div className="sort-control">
                <label htmlFor="sort-order">Ordenar por: 
                    <select id="sort-order" onChange={(e) => handleSortChange(e.target.value)} value={sortOrder}>
                        <option value="default">Por defecto</option>
                        <option value="price-asc">Precio: más bajo a más alto</option>
                        <option value="price-desc">Precio: más alto a más bajo</option>
                        <option value="name-asc">Nombre: A-Z</option>
                        <option value="name-desc">Nombre: Z-A</option>
                    </select>
                </label>
            </div>
            <div className="product-count">
                Mostrando 1-{filteredProducts.length} de {filteredProducts.length} resultados
            </div>
        </div>
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

export default Offers;
