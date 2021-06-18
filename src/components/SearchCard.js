import { useState } from 'react'
import Block from './Block'
import Card from './Card'


const coins = require("../data.json")



export default function SearchList(props) {

    const keys = Object.keys(coins)
    return (
        <Block height="100vh">
            <div className="row mx-0">
            { 
                keys.map((element , index) => {
                    if (element.toLowerCase().includes(props.search.toLowerCase()) || coins[element].name.toLowerCase().includes(props.search.toLowerCase())) {
                        return (
                            <div className="col-lg card-container my-3">
                                <Card key={index} title={coins[element].name} quote={element.split("THB_")[1]} data={props.data}/>
                            </div>
                        )
                    }
                }) 
            }
            </div>
        </Block>
    )
}