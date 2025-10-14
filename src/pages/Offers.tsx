// src/pages/Offers.tsx
import React, { useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Offers.css'; // Creating a new CSS file for Offers
import bannerm from '../assets/img/bannerm.jpg';

const formatPrice = (price: number) => {
  return `$ ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};

const Offers: React.FC = () => {
  // Use useMemo to filter products with discounts only once
  const discountedProducts = useMemo(() => products.filter(p => p.oldPrice), []);

  return (
    <div className="offers-page">
      <div className="banner-container">
        <img src={bannerm} alt="Banner de ofertas" className="offers-banner" />
      </div>
      <div className="product-grid">
        {discountedProducts.map((product, index) => (
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
