import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import {
  DEFAULT_LANGUAGE,
  LOCALE_BY_LANGUAGE,
  SUPPORTED_LANGUAGES,
  translations
} from './translations';

const I18nContext = createContext(null);

const getPath = (objectValue, path) => {
  const parts = path.split('.');
  let current = objectValue;
  for (const part of parts) {
    if (!current || typeof current !== 'object') return undefined;
    current = current[part];
  }
  return current;
};

const interpolate = (text, vars) => {
  if (!vars) return text;
  return Object.entries(vars).reduce(
    (acc, [key, value]) => acc.replaceAll(`{${key}}`, String(value)),
    text
  );
};

export const I18nProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('lang');
    const fromStorage = window.localStorage.getItem('lang');
    const candidate = fromUrl || fromStorage || DEFAULT_LANGUAGE;
    return SUPPORTED_LANGUAGES.includes(candidate) ? candidate : DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    window.localStorage.setItem('lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const locale = LOCALE_BY_LANGUAGE[language] || LOCALE_BY_LANGUAGE[DEFAULT_LANGUAGE];

  const t = useMemo(() => {
    return (key, vars) => {
      const primary = getPath(translations[language], key);
      const fallback = getPath(translations[DEFAULT_LANGUAGE], key);
      const value = primary ?? fallback ?? key;
      return typeof value === 'string' ? interpolate(value, vars) : value;
    };
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, locale, t }), [language, locale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

I18nProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
};
