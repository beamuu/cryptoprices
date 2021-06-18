import Block from './Block'
import List from './List'
import ListHead from './ListHead'


const coins = require("../data.json")



export default function SearchList(props) {

    const keys = Object.keys(coins)

    return (
        <Block height="100vh">
            <ListHead />
            { 
                keys.map((element , index) => {
                    if (element.split("THB_")[1].toLowerCase().includes(props.search.toLowerCase()) || coins[element].name.toLowerCase().includes(props.search.toLowerCase())) {
                        return <List key={index} title={coins[element].name} quote={element.split("THB_")[1]} data={props.data}/>
                    }
                }) 
            }
        </Block>
    )
}