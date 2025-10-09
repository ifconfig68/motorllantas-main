
// src/components/ProductCarousel.tsx
import React from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import './ProductCarousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from '../data/products';
import { Link } from 'react-router-dom';

const formatPrice = (price: number) => {
  return `$ ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};

const ProductCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="product-carousel-container">
      <div className="carousel-header">
        <h2>Las mejores llantas</h2>
        <Link to="/tires" className="view-more-button">VER MÁS...</Link>
      </div>
      <div className="product-carousel">
        <Slider {...settings}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              price={formatPrice(product.price)}
              oldPrice={product.oldPrice ? formatPrice(product.oldPrice) : undefined}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCarousel;
