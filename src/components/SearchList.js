import Block from './Block'
import List from './List'


const coins = require("../data.json")



export default function SearchList(props) {

    const keys = Object.keys(coins)

    return (
        <Block height="100vh">
            { 
                keys.map((element , index) => {
                    if (element.toLowerCase().includes(props.search.toLowerCase()) || coins[element].name.toLowerCase().includes(props.search.toLowerCase())) {
                        return <List key={index} title={coins[element].name} quote={element.split("THB_")[1]} data={props.data}/>
                    }
                }) 
            }
        </Block>
    )
}