import { useState , useContext } from 'react'
import { DisplayContext } from './contexts/Display'

// Display mode
import DefaultDisplay from './DefaultDisplay'
import DefaultList from './DefaultList'

export default function Window({ data }) {
    const [activeWindow , setActiveWindow] = useState("card")
    const { activeDisplay  } = useContext(DisplayContext)
    if (activeDisplay !== activeWindow) {
        setActiveWindow(activeDisplay)
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