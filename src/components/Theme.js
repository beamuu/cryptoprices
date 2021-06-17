import React, { useState } from 'react'

const themes = {
    dark: {
        backgroundColor: "#000000",
        color: "#ffffff"
    },
    light: {
        backgroundColor: "#ffffff",
        color: "#000000"
    }
}
export const ThemeContext = React.createContext()

export const ThemeProvider = ({ children }) => {

    // LIGHT theme use state `true` as a default.
    const [theme, setTheme] = useState(true)
    const themeData = theme ? themes.light : themes.dark
    return (
        <ThemeContext.Provider value={{ theme, setTheme, themeData }} >
            {children}
        </ThemeContext.Provider>
    )
}
