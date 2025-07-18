import React from 'react';
import { useTranslation } from 'react-i18next'; // Importar useTranslation
import LanguageSwitcher from './LanguageSwitcher'; // Importar el nuevo componente

function Header() {
  const { t } = useTranslation(); // Inicializar useTranslation

  return (
    <header>
      <div className="container">
        <a href="#hero" className="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          {t('header.logo_text')} {/* Usar la clave de traducción */}
        </a>
        <nav className="nav-menu">
          <ul>
            <li><a href="#hero">{t('header.home')}</a></li> {/* Usar la clave */}
            <li><a href="#services">{t('header.services')}</a></li> {/* Usar la clave */}
            <li><a href="#contact">{t('header.contact')}</a></li> {/* Usar la clave */}
          </ul>
        </nav>
        <LanguageSwitcher /> {/* Incluir el selector de idiomas */}
      </div>
    </header>
  );
}

export default Header;