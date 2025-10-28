import React from 'react';
<<<<<<< HEAD
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
=======
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
>>>>>>> upstream/main
import VehicleSelector from './components/VehicleSelector';
import TireSearch from './components/TireSearch';
import InfoSection from './components/InfoSection';
import SecureSection from './components/SecureSection';
import motorllantasLogo from './assets/img/motorllantas.png';
import perfilIcon from './assets/img/perfil.png';
import compraIcon from './assets/img/compra.png';
<<<<<<< HEAD
import ProductCarousel  from './components/ProductCarousel';
=======
import ProductCarousel from './components/ProductCarousel';
>>>>>>> upstream/main
import ShippingInfo from './components/ShippingInfo';
import Map from './components/Map';
import Motorpost from './components/Motorpost';
import PaymentMethods from './components/PaymentMethods';
<<<<<<< HEAD


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
        <h1>Cambios en rama main</h1>
      </main>
      <InfoSection />
      <SecureSection />
      <ProductCarousel /> 
      <ShippingInfo />
      <Map />
      <Motorpost />
      <PaymentMethods />
    </div>
=======
import Offers from './pages/Offers';
import Tires from './pages/Tires';
import Contact from './pages/Contact';
import Installation from './pages/Installation';
import Footer from './components/Footer';

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
          </div>
        </header>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/tires" element={<Tires />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
>>>>>>> upstream/main
  );
}

export default App;
