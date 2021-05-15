import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme,setTheme] = useState('night')

    function toggleTheme(){
        setTheme(theme==='night'?'day':'night')
    }


  return <ThemeContext.Provider value={{ theme,toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
