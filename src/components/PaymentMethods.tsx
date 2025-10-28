import React from 'react';
import './PaymentMethods.css';
import pagosm from '../assets/img/pagosm.png';
<<<<<<< HEAD
=======
import servicios from '../assets/img/servicios.jpg';
>>>>>>> upstream/main

function PaymentMethods() {
  return (
    <div className="payment-methods-wrapper">
      <div className="payment-methods-container">
        <img src={pagosm} alt="Payment Methods" />
<<<<<<< HEAD
=======
        <img src={servicios} alt="Nuestros servicios" className="services-image" />
>>>>>>> upstream/main
      </div>
    </div>
  );
}

export default PaymentMethods;
