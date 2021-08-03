import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTrans from "./locales/en.json";
import viTrans from "./locales/vi.json";
// the translations
const resources = {
  english: {
    translation: enTrans,
  },
  vietnamese: {
    translation: viTrans,
  },
};

i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
