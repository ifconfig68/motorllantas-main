import React from 'react';
import './PaymentMethods.css';
import pagosm from '../assets/img/pagosm.png';

function PaymentMethods() {
  return (
    <div className="payment-methods-wrapper">
      <div className="payment-methods-container">
        <img src={pagosm} alt="Payment Methods" />
      </div>
    </div>
  );
}

export default PaymentMethods;
