
// src/components/ProductCarousel.tsx
import React from 'react';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import './ProductCarousel.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    imageUrl: 'https://motorllantas.com/wp-content/uploads/2024/07/Nankang-NS-2-205-45R16.jpg',
    title: 'Nankang NS-2 205/45R16',
    grip: 'Mejor Agarre',
    rating: 5,
    stock: 8,
    shipping: 'Envío Gratis',
    oldPrice: 309758,
    price: 278049,
    brandLogo: 'src/assets/img/Nankang-logo.png',
    discount: 10,
  },
  {
    imageUrl: 'https://motorllantas.com/wp-content/uploads/2024/07/Boto-GENESYS-205-60R15.jpg',
    title: 'Boto GENESYS 205/60R15',
    grip: 'Mejor Agarre',
    rating: 5,
    stock: 8,
    shipping: 'Envío Gratis',
    oldPrice: 253650,
    price: 234146,
    brandLogo: 'https://motorllantas.com/wp-content/uploads/2024/07/Boto-logo.png',
    discount: 8,
  },
  {
    imageUrl: 'https://motorllantas.com/wp-content/uploads/2024/07/Ceat-SPORTDRIVE-205-45R17.jpg',
    title: 'Ceat SPORTDRIVE 205/45R17',
    grip: 'XL Mejor Agarre',
    rating: 5,
    stock: 8,
    shipping: 'Envío Gratis',
    oldPrice: 326060,
    price: 309756,
    brandLogo: 'https://motorllantas.com/wp-content/uploads/2024/07/Ceat-logo.png',
    discount: 5,
  },
  {
    imageUrl: 'https://motorllantas.com/wp-content/uploads/2024/07/Nankang-NS-2-205-45R17.jpg',
    title: 'Nankang NS-2 205/45R17',
    grip: 'Mejor Agarre',
    rating: 5,
    stock: 8,
    shipping: 'Envío Gratis',
    oldPrice: 335386,
    price: 303659,
    brandLogo: 'src/assets/img/Nankang-logo.png',
    discount: 9,
  },
  {
    imageUrl: 'https://motorllantas.com/wp-content/uploads/2024/07/Nankang-AS-2-205-45R17.jpg',
    title: 'Nankang AS-2+ 205/45R17',
    grip: 'Mejor Agarre',
    rating: 5,
    stock: 8,
    shipping: 'Envío Gratis',
    oldPrice: 329270,
    price: 307317,
    brandLogo: 'src/assets/img/Nankang-logo.png',
    discount: 7,
  },
  // Slide 2
  {
    imageUrl: 'https://motorllantas.com/wp-content/uploads/2024/07/Nankang-NS-2-205-45R16.jpg',
    title: 'Nankang NS-2 205/45R16',
    grip: 'Mejor Agarre',
    rating: 5,
    stock: 8,
    shipping: 'Envío Gratis',
    oldPrice: 309758,
    price: 278049,
    brandLogo: 'src/assets/img/Nankang-logo.png',
    discount: 10,
  },
  {
    imageUrl: 'https://motorllantas.com/wp-content/uploads/2024/07/Boto-GENESYS-205-60R15.jpg',
    title: 'Boto GENESYS 205/60R15',
    grip: 'Mejor Agarre',
    rating: 5,
    stock: 8,
    shipping: 'Envío Gratis',
    oldPrice: 253650,
    price: 234146,
    brandLogo: 'https://motorllantas.com/wp-content/uploads/2024/07/Boto-logo.png',
    discount: 8,
  },
  {
    imageUrl: 'https://motorllantas.com/wp-content/uploads/2024/07/Ceat-SPORTDRIVE-205-45R17.jpg',
    title: 'Ceat SPORTDRIVE 205/45R17',
    grip: 'XL Mejor Agarre',
    rating: 5,
    stock: 8,
    shipping: 'Envío Gratis',
    oldPrice: 326060,
    price: 309756,
    brandLogo: 'https://motorllantas.com/wp-content/uploads/2024/07/Ceat-logo.png',
    discount: 5,
  },
  {
    imageUrl: 'https://motorllantas.com/wp-content/uploads/2024/07/Nankang-NS-2-205-45R17.jpg',
    title: 'Nankang NS-2 205/45R17',
    grip: 'Mejor Agarre',
    rating: 5,
    stock: 8,
    shipping: 'Envío Gratis',
    oldPrice: 335386,
    price: 303659,
    brandLogo: 'src/assets/img/Nankang-logo.png',
    discount: 9,
  },
  {
    imageUrl: 'https://motorllantas.com/wp-content/uploads/2024/07/Nankang-AS-2-205-45R17.jpg',
    title: 'Nankang AS-2+ 205/45R17',
    grip: 'Mejor Agarre',
    rating: 5,
    stock: 8,
    shipping: 'Envío Gratis',
    oldPrice: 329270,
    price: 307317,
    brandLogo: 'src/assets/img/Nankang-logo.png',
    discount: 7,
  },
  // Slide 3
  {
    imageUrl: 'https://motorllantas.com/wp-content/uploads/2024/07/Nankang-NS-2-205-45R16.jpg',
    title: 'Nankang NS-2 205/45R16',
    grip: 'Mejor Agarre',
    rating: 5,
    stock: 8,
    shipping: 'Envío Gratis',
    oldPrice: 309758,
    price: 278049,
    brandLogo: 'src/assets/img/Nankang-logo.png',
    discount: 10,
  },
  {
    imageUrl: 'https://motorllantas.com/wp-content/uploads/2024/07/Boto-GENESYS-205-60R15.jpg',
    title: 'Boto GENESYS 205/60R15',
    grip: 'Mejor Agarre',
    rating: 5,
    stock: 8,
    shipping: 'Envío Gratis',
    oldPrice: 253650,
    price: 234146,
    brandLogo: 'https://motorllantas.com/wp-content/uploads/2024/07/Boto-logo.png',
    discount: 8,
  },
  {
    imageUrl: 'https://motorllantas.com/wp-content/uploads/2024/07/Ceat-SPORTDRIVE-205-45R17.jpg',
    title: 'Ceat SPORTDRIVE 205/45R17',
    grip: 'XL Mejor Agarre',
    rating: 5,
    stock: 8,
    shipping: 'Envío Gratis',
    oldPrice: 326060,
    price: 309756,
    brandLogo: 'https://motorllantas.com/wp-content/uploads/2024/07/Ceat-logo.png',
    discount: 5,
  },
  {
    imageUrl: 'https://motorllantas.com/wp-content/uploads/2024/07/Nankang-NS-2-205-45R17.jpg',
    title: 'Nankang NS-2 205/45R17',
    grip: 'Mejor Agarre',
    rating: 5,
    stock: 8,
    shipping: 'Envío Gratis',
    oldPrice: 335386,
    price: 303659,
    brandLogo: 'src/assets/img/Nankang-logo.png',
    discount: 9,
  },
  {
    imageUrl: 'https://motorllantas.com/wp-content/uploads/2.jpg',
    title: 'Nankang AS-2+ 205/45R17',
    grip: 'Mejor Agarre',
    rating: 5,
    stock: 8,
    shipping: 'Envío Gratis',
    oldPrice: 329270,
    price: 307317,
    brandLogo: 'src/assets/img/Nankang-logo.png',
    discount: 7,
  },
];

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
        <button className="view-more-button">VER MÁS...</button>
      </div>
      <div className="product-carousel">
        <Slider {...settings}>
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCarousel;
