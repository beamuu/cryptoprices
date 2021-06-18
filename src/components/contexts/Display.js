import React, { useState } from 'react'

export const DisplayContext = React.createContext()

export const DisplayProvider = ({ children }) => {
    const [activeDisplay , setActiveDisplay] = useState("card")
    const [searchText , setSearchText] = useState("")
    return (
        <DisplayContext.Provider value={{activeDisplay , setActiveDisplay , searchText , setSearchText}}>
            { children }
        </DisplayContext.Provider>
    )
}