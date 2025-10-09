
// src/pages/Offers.tsx
import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Offers.css';

const formatPrice = (price: number) => {
  return `$ ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};

const Offers: React.FC = () => {
  return (
    <div className="offers-page">
      <h1>Ofertas</h1>
      <div className="offers-grid">
        {products.map((product, index) => (
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
