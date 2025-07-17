import React from 'react';

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>Automatización con n8n</h3>
            <p>Optimiza tus flujos de trabajo y conecta tus aplicaciones sin esfuerzo, ahorrando tiempo y reduciendo errores.</p>
          </div>
          <div className="service-item">
            <h3>Creación de Sitios Web</h3>
            <p>Diseñamos y desarrollamos sitios web modernos, atractivos y funcionales que capturan la esencia de tu marca y atraen a tus clientes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;