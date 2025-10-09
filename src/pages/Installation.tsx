import React from 'react';
import './Installation.css';

const Installation: React.FC = () => {
  return (
    <div className="page-container installation-page">
        <div className="page-title-container">
            <h1 className="page-title-text">INSTALACIÓN</h1>
        </div>
        <div className="installation-content">
            <p>En nuestro centro de servicios, ofrecemos un servicio de instalación de llantas profesional y rápido para que puedas volver a la carretera con total seguridad. Nuestro equipo de expertos se encargará de todo, desde el desmontaje de las llantas viejas hasta el montaje y equilibrado de las nuevas.</p>
            <h2>Nuestros Servicios Incluyen:</h2>
            <ul>
                <li>Desmontaje y montaje de llantas</li>
                <li>Equilibrado de ruedas por computadora</li>
                <li>Alineación de la dirección</li>
                <li>Revisión de la presión de los neumáticos</li>
                <li>Inspección de frenos y suspensión</li>
            </ul>
            <p>Trabajamos con las mejores marcas y herramientas del mercado para garantizar un servicio de la más alta calidad. Además, te ofrecemos una garantía de satisfacción para que puedas estar seguro de que tu vehículo está en las mejores manos.</p>
            <p>No dudes en ponerte en contacto con nosotros para solicitar una cita o para obtener más información sobre nuestros servicios. ¡Estaremos encantados de atenderte!</p>
        </div>
    </div>
  );
};

export default Installation;
