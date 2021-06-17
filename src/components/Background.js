import React, { useContext } from 'react'
import { ThemeContext } from './Theme'
import styled from 'styled-components'



const MainBackground = styled.div`
    background-color: ${(props) => props.backgroundColor} ;
    color: ${(props) => props.color} ;
    min-height: 100vh ;
    margin: 0 ;
    padding: 0 ;
    transition: 400ms ease ;
`

export default function Background({ children }) {

    const { theme, setTheme, themeData } = useContext(ThemeContext)
    const activeTheme = theme ? "light" : "dark"
    document.body.style.backgroundColor = themeData.backgroundColor
    document.body.style.color = themeData.color
    return (
        <>
            {children}
        </>
    )
}