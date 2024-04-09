import React, { createContext, useState } from "react";
import { useTranslation } from "react-i18next";

export const LanguageContext = createContext();

export const languageData = {
  en: { value: "en", label: "ENG", dir: "ltr" },
  fr: { value: "fr", label: "français", dir: "ltr" },
};

const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState({
    value: "en",
    label: "ENG",
    dir: "ltr",
    active: true,
  });
  const { i18n } = useTranslation();

  const updateLanguage = (newLang) => {
    if (["en", "ar"].includes(newLang)) {
      const updatedLanguageData = Object.keys(languageData).map((item) => ({
        ...languageData[item],
        active: item === newLang,
        dir: languageData[item]?.value === "ar" ? "rtl" : "ltr",
      }));
      const activeLanguage = updatedLanguageData?.find((item) => item.active);
      document.body.dir = activeLanguage.dir;
      i18n.changeLanguage(newLang);
      setSelectedLanguage(activeLanguage);
    }
  };

  return (
    <>
      <LanguageContext.Provider
        value={{ selectedLanguage, setSelectedLanguage, updateLanguage }}
      >
        {children}
      </LanguageContext.Provider>
    </>
  );
};

export default LanguageProvider;
