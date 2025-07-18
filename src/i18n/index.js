import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa tus archivos de traducción
import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';
import jaTranslation from './locales/ja/translation.json';

i18n
  .use(initReactI18next) // Pasa i18n a react-i18next.
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      es: {
        translation: esTranslation
      },
      ja: {
        translation: jaTranslation
      }
    },
    lng: 'es', // Idioma predeterminado
    fallbackLng: 'en', // Idioma de respaldo si la traducción no existe
    interpolation: {
      escapeValue: false // React ya escapa los valores para prevenir XSS
    }
  });

export default i18n;