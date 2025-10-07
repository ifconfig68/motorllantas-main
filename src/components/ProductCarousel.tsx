// src/components/ProductCarousel.tsx
import React from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard"; // Asegúrate de que este componente ProductCard esté creado previamente

// Configuración del carrusel
const settings = {
  dots: true, // Mostrar puntos de navegación
  infinite: true, // Carrusel infinito
  speed: 500, // Velocidad de la transición
  slidesToShow: 5, // Mostrar 5 productos a la vez
  slidesToScroll: 1, // Avanzar de uno en uno
  responsive: [
    {
      breakpoint: 1024, // Pantallas grandes
      settings: {
        slidesToShow: 3, // Mostrar 3 productos en pantallas más pequeñas
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, // Pantallas medianas
      settings: {
        slidesToShow: 2, // Mostrar 2 productos en pantallas medianas
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // Pantallas pequeñas
      settings: {
        slidesToShow: 1, // Mostrar 1 producto en pantallas muy pequeñas
        slidesToScroll: 1,
      },
    },
  ],
};

const ProductCarousel: React.FC = () => {
  return (
    <div className="product-carousel">
      <Slider {...settings}>
        {/* 5 productos en el carrusel */}
        <ProductCard
          imageUrl="https://motorllantas.com/wp-content/uploads/2025/07/PR-TTF-CEAT.jpg"
          logoUrl="https://via.placeholder.com/50"
          title="Nankang NS-2 205/45R16"
          price={278049}
          oldPrice={309758}
          stock={8}
        />
        <ProductCard
          imageUrl="https://motorllantas.com/wp-content/uploads/2025/07/PR-TTF-CEAT.jpg"
          logoUrl="https://via.placeholder.com/50"
          title="Producto 2"
          price={250000}
          oldPrice={300000}
          stock={5}
        />
        <ProductCard
          imageUrl="https://motorllantas.com/wp-content/uploads/2025/07/PR-TTF-CEAT.jpg"
          logoUrl="https://via.placeholder.com/50"
          title="Producto 3"
          price={210000}
          oldPrice={250000}
          stock={10}
        />
        <ProductCard
          imageUrl="https://via.placeholder.com/150"
          logoUrl="https://via.placeholder.com/50"
          title="Producto 4"
          price={300000}
          oldPrice={350000}
          stock={3}
        />
        <ProductCard
          imageUrl="https://via.placeholder.com/150"
          logoUrl="https://via.placeholder.com/50"
          title="Producto 5"
          price={150000}
          oldPrice={200000}
          stock={12}
        />
        <ProductCard
          imageUrl="https://via.placeholder.com/150"
          logoUrl="https://via.placeholder.com/50"
          title="Producto 6"
          price={220000}
          oldPrice={270000}
          stock={7}
        />
        <ProductCard
          imageUrl="https://via.placeholder.com/150"
          logoUrl="https://via.placeholder.com/50"
          title="Producto 7"
          price={180000}
          oldPrice={210000}
          stock={14}
        />
        <ProductCard
          imageUrl="https://via.placeholder.com/150"
          logoUrl="https://via.placeholder.com/50"
          title="Producto 8"
          price={240000}
          oldPrice={280000}
          stock={4}
        />
        <ProductCard
          imageUrl="https://via.placeholder.com/150"
          logoUrl="https://via.placeholder.com/50"
          title="Producto 9"
          price={260000}
          oldPrice={300000}
          stock={9}
        />
        <ProductCard
          imageUrl="https://via.placeholder.com/150"
          logoUrl="https://via.placeholder.com/50"
          title="Producto 10"
          price={200000}
          oldPrice={230000}
          stock={6}
        />
      </Slider>
    </div>
  );
};

export default ProductCarousel;
