import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import axios from "axios";

const fetchTranslations = async (lng) => {
  const response = await axios.get(`/locales/${lng}.json`);
  return response.data;
};

const loadResources = async () => {
  const enTranslations = await fetchTranslations("en");
  const trTranslations = await fetchTranslations("tr");

  return {
    en: { translation: enTranslations },
    tr: { translation: trTranslations },
  };
};

loadResources().then((resources) => {
  i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
});

export default i18n;
