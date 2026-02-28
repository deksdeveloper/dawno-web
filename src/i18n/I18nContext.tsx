"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { en, TranslationType } from "./locales/en";
import { tr } from "./locales/tr";
import { ru } from "./locales/ru";
import { de } from "./locales/de";

type Language = "en" | "tr" | "ru" | "de";

interface I18nContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: TranslationType;
}

const translations: Record<Language, TranslationType> = { en, tr, ru, de };

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>("tr");

    useEffect(() => {
        const savedLang = localStorage.getItem("lang") as Language;
        if (savedLang && translations[savedLang]) {
            setLanguageState(savedLang);
        } else {
            const browserLang = navigator.language.split("-")[0] as Language;
            if (translations[browserLang]) {
                setLanguageState(browserLang);
            }
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("lang", lang);
    };

    const t = translations[language];

    return (
        <I18nContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </I18nContext.Provider>
    );
};

export const useI18n = () => {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error("useI18n must be used within an I18nProvider");
    }
    return context;
};
