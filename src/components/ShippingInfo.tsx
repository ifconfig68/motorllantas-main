
import React from 'react';
import './ShippingInfo.css';
import shippingImage from '../assets/img/enviosm.png';

const ShippingInfo: React.FC = () => {
  return (
    <div className="shipping-info-wrapper">
        <div className="shipping-info-container">
            <img src={shippingImage} alt="Envíos a nivel nacional" className="shipping-image" />
        </div>
    </div>
  );
};

export default ShippingInfo;
