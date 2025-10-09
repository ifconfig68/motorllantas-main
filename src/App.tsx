import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import VehicleSelector from './components/VehicleSelector';
import TireSearch from './components/TireSearch';
import InfoSection from './components/InfoSection';
import SecureSection from './components/SecureSection';
import motorllantasLogo from './assets/img/motorllantas.png';
import perfilIcon from './assets/img/perfil.png';
import compraIcon from './assets/img/compra.png';
import ProductCarousel from './components/ProductCarousel';
import ShippingInfo from './components/ShippingInfo';
import Map from './components/Map';
import Motorpost from './components/Motorpost';
import PaymentMethods from './components/PaymentMethods';
import Offers from './pages/Offers';
import Tires from './pages/Tires';

const Home = () => (
  <>
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
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={motorllantasLogo} className="App-logo" alt="logo" />
          </Link>
          <nav>
            <NavLink to="/" end>INICIO</NavLink>
            <NavLink to="/tires">LLANTAS</NavLink>
            <NavLink to="/offers">OFERTAS</NavLink>
            <NavLink to="/installation">INSTALACIÓN</NavLink>
            <NavLink to="/contact">CONTACTO</NavLink>
          </nav>
          <div className="header-icons">
            <img src={perfilIcon} alt="perfil" />
            <img src={compraIcon} alt="compra" />
            <span>CO</span>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/tires" element={<Tires />} />
          <Route path="/installation" element={<h1>Página de Instalación</h1>} />
          <Route path="/contact" element={<h1>Página de Contacto</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
