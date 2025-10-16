
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

  // Find min and max prices for the slider
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

  // This effect will run whenever the sort order or price range changes
  useEffect(() => {
    let newFilteredProducts = [...discountedProducts];

    // 1. Filter by price range
    newFilteredProducts = newFilteredProducts.filter(
      p => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // 2. Sort the result
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
        break; // Keep original order if 'default'
    }

    setFilteredProducts(newFilteredProducts);
  }, [sortOrder, priceRange, discountedProducts]);

  // Handlers to update state
  const handleSortChange = (newSortOrder: string) => {
    setSortOrder(newSortOrder);
  };

  const handlePriceApply = (newRange: [number, number]) => {
    setPriceRange(newRange);
  };

  return (
    <div className="offers-page">
      <div className="banner-container">
        <img src={bannerm} alt="Banner de ofertas" className="offers-banner" />
      </div>
      <div className="controls-wrapper">
        <div className="filter-group-left">
          {/* Replace the old select with the new PriceFilter component */}
          <PriceFilter min={minPrice} max={maxPrice} onApply={handlePriceApply} />
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
