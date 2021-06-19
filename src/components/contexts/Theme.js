import React, { useState } from 'react'



const themes = {
    dark: {
        backgroundColor: "#1c1e21",
        color: "#ffffff"
    },
    light: {
        backgroundColor: "#ffffff",
        color: "#000000"
    }
}

function calculatePerferredTheme() {
    const hr = new Date(Date.now()).getHours()
    if (hr < 6 || hr > 18) {
        return false
    }
    else {
        return true
    }
    
}



export const ThemeContext = React.createContext()

export const ThemeProvider = ({ children }) => {

    // LIGHT theme use state `true` as a default.
    
    const [theme, setTheme] = useState(calculatePerferredTheme())
    const themeData = theme ? themes.light : themes.dark
    return (
        <ThemeContext.Provider value={{ theme, setTheme, themeData }} >
            {children}
        </ThemeContext.Provider>
    )
}
