import { useContext } from 'react'
import { ThemeContext } from './contexts/Theme'


export default function Footer(props) {
    const { theme } = useContext(ThemeContext)
    return (
        <>
            <div className={`footer${theme ? "" : "-dark"} d-flex justify-content-center align-items-center`}>
                <a href="https://github.com/nutchanonc/cryptoprices" target="_blank"><img src="/GitHub-Mark-120px-plus.png" width="30px" className={`github${theme ? "" : "-dark"}`}/> </a>
            </div>
        </>
    )
}