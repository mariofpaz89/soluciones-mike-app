import React from 'react';
import { useTranslation } from 'react-i18next'; // Importar useTranslation

function Services() {
  const { t } = useTranslation(); // Inicializar useTranslation

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>{t('services_section.title')}</h2> {/* Usar la clave */}
        <div className="services-grid">
          <div className="service-item">
            <h3>{t('services_section.automation_title')}</h3> {/* Usar la clave */}
            <p>{t('services_section.automation_description')}</p> {/* Usar la clave */}
          </div>
          <div className="service-item">
            <h3>{t('services_section.web_dev_title')}</h3> {/* Usar la clave */}
            <p>{t('services_section.web_dev_description')}</p> {/* Usar la clave */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;