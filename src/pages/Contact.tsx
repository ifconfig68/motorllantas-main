import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="page-container contact-page">
        <div className="page-title-container">
            <h1 className="page-title-text">CONTACTO</h1>
        </div>
        <div className="contact-content">
            <p>¿Tienes alguna pregunta o quieres solicitar una cita? No dudes in ponerte en contacto con nosotros a través de los siguientes medios:</p>
            <ul>
                <li><strong>Teléfono:</strong> +1 (555) 123-4567</li>
                <li><strong>Email:</strong> contacto@tutiendadellantas.com</li>
                <li><strong>Dirección:</strong> 123 Calle Falsa, Springfield, EE. UU.</li>
            </ul>
            <p>También puedes rellenar el siguiente formulario y nos pondremos en contacto contigo lo antes posible:</p>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea id="message" name="message" rows={5} required></textarea>
                </div>
                <button type="submit" className="submit-button">Enviar Mensaje</button>
            </form>
        </div>
    </div>
  );
};

export default Contact;
