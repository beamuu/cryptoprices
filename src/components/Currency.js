import React , { useState } from 'react'

export const CurrencyContext = React.createContext()

export const CurrencyProvider = ({ children }) => {

    const [ activeCurrency , setActiveCurrency] = useState("THB");
    
    return (
        <CurrencyContext.Provider value={{activeCurrency , setActiveCurrency}}>
            { children }
        </CurrencyContext.Provider>
    )
}