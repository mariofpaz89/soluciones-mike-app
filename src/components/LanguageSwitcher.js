import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div className="language-switcher">
      <label htmlFor="language-select">{t('language_switcher.select_language')}</label>
      <select id="language-select" onChange={changeLanguage} value={i18n.language}>
        <option value="es">Español</option>
        <option value="en">English</option>
        <option value="ja">日本語</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;