import React, { useState, useContext } from 'react'
import { CurrencyContext } from './Currency'
import styled from 'styled-components'
import Block from './Block'

const Item = styled.button`
    background-color: ${props => props.active ? "rgb(61, 120, 247)" : "rgb(237, 240, 243)"};
    border-style: none;
    border-width: 1px;
    border-color: rgb(197, 207, 228);
    border-radius: 10px;
    color: ${props => props.active ? "white" : "rgb(41, 41, 41)"};
    margin-left: 15px;
    margin-right: 15px;
    &:hover {
        background-color: rgb(135, 172, 252);
        color: white;
        border-style: none;
    }
`

// const ItemHover = styled.button`
//     &:hover ${Item}  {
//         background-color: rgb(61, 120, 247);
//         color: white;
//         border-style: none; 
//     }
// `

export default function Selector(props) {

    const { activeCurrency, setActiveCurrency } = useContext(CurrencyContext)

    const handleChangeCurrency = e => {
        const { value } = e.target
        setActiveCurrency(value)
    }

    return (
        <>
            {/* <Block>
                <div className="mx-5 my-2">
                    <button className="mx-3 selector-item">THB</button>
                    <button className="mx-3 selector-item">USD</button>
                </div>
            </Block> */}
            <Block>
                <div className="mx-5 my-2">
                    <span>Display fiat currency as</span>
                    <Item active={activeCurrency === "THB" ? true : false} value="THB" onClick={handleChangeCurrency}>THB</Item>
                    <Item active={activeCurrency === "USD" ? true : false} value="USD" onClick={handleChangeCurrency}>USD</Item>
                </div>
            </Block>
        </>
    )


}