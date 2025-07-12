import {createContext, useContext, useState} from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({children}) => { //whatever is inside the Provider, is translated and is sent to the context to be able to be used
    const [language, setLanguage] = useState('en');
    const changeLanguage = (newLang) => {
        setLanguage(newLang);
    }

    return (
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    )

}

export const useLanguage = () => useContext(LanguageContext);