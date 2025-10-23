import './Footer.css';
import motorllantasLogo from '../assets/img/motorllantas.png';
import { FaFacebook, FaInstagram, FaPhone, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={motorllantasLogo} alt="Motor Llantas" className="footer-logo-img" />
      </div>
      <div className="footer-contact">
        <p>Contáctanos:</p>
        <div className="footer-social-icons">
         <a href="#" target="_blank" rel="noopener noreferrer"><FaPhone/></a> 
          <a href="#" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a> 
        </div>
      </div>
      <div className="footer-social">
        <p>Síguenos en nuestras redes:</p>
        <div className="footer-social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a> 
          <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a> 
          <a href="#" target="_blank" rel="noopener noreferrer"><FaTiktok /></a> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
