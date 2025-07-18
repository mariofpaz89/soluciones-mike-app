import React from 'react';
import { useTranslation } from 'react-i18next'; // Importar useTranslation

function Hero() {
  const { t } = useTranslation(); // Inicializar useTranslation

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>{t('hero.title')}</h1> {/* Usar la clave */}
        <p>{t('hero.subtitle')}</p> {/* Usar la clave */}
        <a href="#services" className="btn">{t('hero.cta_button')}</a> {/* Usar la clave */}
      </div>
    </section>
  );
}

export default Hero;