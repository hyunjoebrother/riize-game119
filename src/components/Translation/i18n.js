import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationKR from "../Translation/translationKR.json";
import translationEN from "../Translation/translationEN.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: translationEN,
      },
      kr: {
        translations: translationKR,
      },
    },
    fallbackLng: "kr",
    debug: true,

    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });
