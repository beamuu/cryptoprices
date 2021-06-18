import { useState , useContext } from 'react'
import { DisplayContext } from './contexts/Display'

// Display mode
import DefaultDisplay from './DefaultDisplay'
import DefaultList from './DefaultList'
import SearchList from './SearchList'
import SearchCard from './SearchCard'

export default function Window({ data }) {
    const [activeWindow , setActiveWindow] = useState("card")
    const { activeDisplay , searchText  } = useContext(DisplayContext)
    if (activeDisplay !== activeWindow) {
        setActiveWindow(activeDisplay)
    }
    if (searchText) {
        if (activeWindow === "card") {
            return <SearchCard data={data} search={searchText}/>
        }
        else if (activeWindow === "list") {
            return <SearchList data={data} search={searchText}/>
        }
        else {
            return "Something wrong"
        }
    }
    



    if (activeWindow === "card") {
        return <DefaultDisplay data={data}/>
    }
    else if (activeWindow === "list") {
        return <DefaultList data={data} />
    }
    else {
        return "Something wrong"
    }
    
}