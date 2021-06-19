import React, { useState, useContext } from 'react'
import { CurrencyContext } from './contexts/Currency'
import { DisplayContext } from './contexts/Display'
import { ThemeContext } from './contexts/Theme'
import styled from 'styled-components'
import Block from './Block'

const Item = styled.button`
    background-color: ${props => props.active ? "rgb(61, 120, 247)" : "rgb(237, 240, 243)"};
    border-style: none;
    border-width: 1px;
    border-color: rgb(197, 207, 228);
    border-radius: 10px;
    color: ${props => props.active ? "white" : "rgb(41, 41, 41)"};
    margin-left: 10px;
    margin-right: 10px;
    transition: 400ms ease;
    &:hover {
        background-color: rgb(135, 172, 252);
        color: white;
        border-style: none;
    }
`

export default function Selector(props) {

    const { activeCurrency, setActiveCurrency } = useContext(CurrencyContext)
    const { activeDisplay, setActiveDisplay, setSearchText } = useContext(DisplayContext)
    const { theme } = useContext(ThemeContext)

    const handleChangeCurrency = e => {
        const { value } = e.target
        setActiveCurrency(value)
    }
    const handleChangeDisplay = e => {
        const { name } = e.target
        setActiveDisplay(name)
    }
    const handleSearchInput = e => {
        const { value } = e.target
        setSearchText(value)
    }
    const clearSearch = () => {
        document.getElementById("quotesearchbox").value = "";
        setSearchText("")
    }

    return (
        <>
            <div className={`full-width myselector-container${theme ? "" : "-dark"}`}>
                <Block>
                    <div className="row mx-0 my-2">
                        <div className="col-lg px-0 py-2">
                            <span>Display fiat currency as</span>
                            <Item active={activeCurrency === "THB" ? true : false} value="THB" onClick={handleChangeCurrency}>THB</Item>
                            <Item active={activeCurrency === "USDT" ? true : false} value="USDT" onClick={handleChangeCurrency}>USD</Item>
                        </div>
                        <div className="col-lg px-0 py-2">
                            <input type="text" className="px-3" placeholder="Quote" onChange={handleSearchInput} id="quotesearchbox" />
                            <button className="selector-button" onClick={clearSearch}>Clear</button>
                        </div>
                        <div className="col-lg px-0 py-2">
                            <img src="/cardDisplay.png" width="20px" className={`mx-2 asbutton${theme ? "" : " invert"}` + (activeDisplay === "card" ? " asbutton-active" : "")} name="card" onClick={handleChangeDisplay} />
                            <img src="/listDisplay.png" width="20px" className={`mx-2 asbutton${theme ? "" : " invert"}` + (activeDisplay === "list" ? " asbutton-active" : "")} name="list" onClick={handleChangeDisplay} />
                        </div>
                    </div>
                </Block>
            </div>
        </>
    )


}