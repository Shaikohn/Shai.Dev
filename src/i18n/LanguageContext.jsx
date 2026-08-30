import { useEffect, useMemo, useState } from "react";
import { translations } from "./translations";
import { LanguageContext } from "./language-context";

const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem("shai-dev-language");
  if (savedLanguage === "es" || savedLanguage === "en") return savedLanguage;
  return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem("shai-dev-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language] }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
