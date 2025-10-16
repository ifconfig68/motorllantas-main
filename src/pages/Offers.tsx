
import React, { useState, useMemo, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import PriceFilter from '../components/PriceFilter'; // Import the new component
import './Offers.css';
import bannerm from '../assets/img/bannerm.jpg';

const formatPrice = (price: number) => {
  return `$ ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};

const Offers: React.FC = () => {
  const discountedProducts = useMemo(() => products.filter(p => p.oldPrice), []);

  const { minPrice, maxPrice } = useMemo(() => {
    if (discountedProducts.length === 0) return { minPrice: 0, maxPrice: 1000 };
    const prices = discountedProducts.map(p => p.price);
    return {
      minPrice: Math.floor(Math.min(...prices)),
      maxPrice: Math.ceil(Math.max(...prices))
    };
  }, [discountedProducts]);

  const [filteredProducts, setFilteredProducts] = useState(discountedProducts);
  const [sortOrder, setSortOrder] = useState('default');
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);

  useEffect(() => {
    let newFilteredProducts = [...discountedProducts];

    newFilteredProducts = newFilteredProducts.filter(
      p => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

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

    setFilteredProducts(newFilteredProducts);
  }, [sortOrder, priceRange, discountedProducts]);

  const handleSortChange = (newSortOrder: string) => {
    setSortOrder(newSortOrder);
  };

  const handlePriceChange = (newRange: [number, number]) => {
    setPriceRange(newRange);
  };
  
  // This effect ensures the price range state is updated when the component mounts or the available range changes.
  useEffect(() => {
    setPriceRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  return (
    <div className="offers-page">
      <div className="banner-container">
        <img src={bannerm} alt="Banner de ofertas" className="offers-banner" />
      </div>
      <div className="controls-wrapper">
        <div className="filter-group-left">
          <PriceFilter min={minPrice} max={maxPrice} onRangeChange={handlePriceChange} />
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
                Mostrando {filteredProducts.length} de {discountedProducts.length} resultados
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
