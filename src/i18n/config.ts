import i18n, { InitOptions } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from '../locales/en.json';
import ru from '../locales/ru.json';

const defaultNS = 'common';

const initParams: InitOptions = {
  ns: [defaultNS],
  defaultNS,
  resources: {
    en: { [defaultNS]: en },
    ru: { [defaultNS]: ru },
  },
  fallbackLng: 'en',
};

i18n.use(LanguageDetector).use(initReactI18next).init(initParams);

export default i18n;
