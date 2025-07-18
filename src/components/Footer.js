import React from 'react';
import { useTranslation } from 'react-i18next'; // Importar useTranslation

function Footer() {
  const { t } = useTranslation(); // Inicializar useTranslation

  return (
    <footer id="contact">
      <div className="container">
        <p>{t('footer.copyright')}</p> {/* Usar la clave */}
      </div>
    </footer>
  );
}

export default Footer;