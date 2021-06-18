import React, { useState, useContext } from 'react'
import { CurrencyContext } from './contexts/Currency'
const coins = require("../data.json")

export default function List(props) {

    const [currency, setCurrency] = useState("THB")

    const { activeCurrency } = useContext(CurrencyContext)

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
        <div className="full-width row m-0 list pt-3">
            <div className="col coinicon-container mb-1">
                <img src={coins[`THB_${props.quote}`].iconUrl} className="coinicon" />
            </div>
            <div className="col mb-1">
                <span className="mr-2">{props.title}</span><span className="mx-1 quote">{props.quote}</span>
            </div>
            <div className="col text-end mb-1">
                <b>{props.data ? (<span className="listprice">{currency === "USDT" ? "$" : null}{currentPrice.toFixed(2)} {currency === "THB" ? "THB" : null}</span>) : "Getting price"}</b>
            </div>
            <div className="col-sm text-end small mb-1">
                high: {currency === "USDT" ? (high24hr/props.data["THB_USDC"].last).toFixed(2) : high24hr} , low: {currency === "USDT" ? (low24hr/props.data["THB_USDC"].last).toFixed(2) : low24hr}
            </div>
            <div className="col-sm d-flex justify-content-end mb-1">
                <div className={"d-flex justify-content-center align-items-center pt-3 " + (percentChange >= 0 ? "green" : "red")}>
                    <p className="color-white percentchange"> {percentChange >= 0 ? `▲${percentChange}` : `▼${Math.abs(percentChange)}`} %</p>
                </div>
            </div>

        </div>
    )

}