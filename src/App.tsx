import React from 'react';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import VehicleSelector from './components/VehicleSelector';
import TireSearch from './components/TireSearch';
import InfoSection from './components/InfoSection';
import SecureSection from './components/SecureSection';
import motorllantasLogo from './assets/img/motorllantas.png';
import perfilIcon from './assets/img/perfil.png';
import compraIcon from './assets/img/compra.png';
import ProductCarousel  from './components/ProductCarousel';
import ShippingInfo from './components/ShippingInfo';
import Map from './components/Map';
import Motorpost from './components/Motorpost';
import PaymentMethods from './components/PaymentMethods';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={motorllantasLogo} className="App-logo" alt="logo" />
        <nav>
          <a href="#" className="active">INICIO</a>
          <a href="#">LLANTAS</a>
          <a href="#">OFERTAS</a>
          <a href="#">INSTALACIÓN</a>
          <a href="#">CONTACTO</a>
        </nav>
        <div className="header-icons">
          <img src={perfilIcon} alt="perfil" />
          <img src={compraIcon} alt="compra" />
          <span>CO</span>
        </div>
      </header>
      <main>
        <div className="search-container">
          <VehicleSelector />
          <TireSearch />
        </div>
        <h1 className="main-title">¡Busca rápido tus llantas!</h1>
      </main>
      <InfoSection />
      <SecureSection />
      <ProductCarousel /> 
      <ShippingInfo />
      <Map />
      <Motorpost />
      <PaymentMethods />
    </div>
  );
}

export default App;
