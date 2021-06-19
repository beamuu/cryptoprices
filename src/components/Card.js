import React, { useState , useContext } from 'react'
import { CurrencyContext } from './contexts/Currency'
import { ThemeContext } from './contexts/Theme'
import { H5 , H6 } from './H'

export default function Card(props) {

    const [currency, setCurrency] = useState("THB")

    const { activeCurrency } =  useContext(CurrencyContext)
    const { theme } =  useContext(ThemeContext)
    // const activeTheme = theme ? "light": "dark"

    if (currency !== activeCurrency) {
        setCurrency(activeCurrency)
    }

    var currentPrice;

    if (currency === "THB") {
        currentPrice = new Number(props.data[`THB_${props.quote}`].last)
    }
    else {
        currentPrice = new Number(props.data[`THB_${props.quote}`].last / props.data["THB_USDC"].last)
    }
    

    const percentChange = props.data[`THB_${props.quote}`].percentChange
    const high24hr = props.data[`THB_${props.quote}`].high24hr
    const low24hr = props.data[`THB_${props.quote}`].low24hr




    return (
        <div className={theme ? "card full-width p-0 my-3" : "card-dark full-width p-0 my-3"}>
            <div className="full-width bgimg" style={{ backgroundImage: `url(/cryptowallpaper/${props.quote}.png)` }} />
            <div className="content full-width pt-4 pb-2 px-3">
                <div className="full-width small">{`${props.quote}/${currency}`}</div>
                <H5>{props.title}</H5>
                <div className="full-width row m-0 mt-2">
                    <div className="col-8 p-0">
                        <h6>{props.data ? (<span className="price">{currency === "USDT" ? "$" : null}{currentPrice.toFixed(2)} {currency === "THB" ? "THB" : null}</span>) : "Getting price"}</h6>
                    </div>
                    <div className="col-4 d-flex justify-content-end p-0">
                        <div className={"d-flex justify-content-center align-items-center pt-3 " + (percentChange >= 0 ? "green" : "red")}>
                            <p className="color-white percentchange"> {percentChange >= 0 ? `▲${percentChange}` : `▼${Math.abs(percentChange)}`} %</p>
                        </div>
                    </div>
                </div>
                <p className="my-0 small">24 hours ago</p>
                <p className="my-0 small">high: {currency === "USDT" ? (high24hr/props.data["THB_USDC"].last).toFixed(2) : high24hr} , low: {currency === "USDT" ? (low24hr/props.data["THB_USDC"].last).toFixed(2) : low24hr}</p>
            </div>
        </div>
    )
}