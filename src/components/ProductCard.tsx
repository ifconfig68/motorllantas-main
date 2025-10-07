// src/components/ProductCard.tsx
import React from "react";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: number;
  oldPrice: number;
  stock: number;
  logoUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  price,
  oldPrice,
  stock,
  logoUrl,
}) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-image" />
      <div className="product-info">
        <img src={logoUrl} alt="Logo" className="product-logo" />
        <h3>{title}</h3>
        <p className="old-price">{`$${oldPrice.toFixed(2)}`}</p>
        <p className="price">{`$${price.toFixed(2)}`}</p>
        <p>{`Stock disponible: ${stock}`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
