import React , { useContext } from 'react'
import { ThemeContext } from './contexts/Theme'
export default function Nav(props) {
    const { theme, setTheme } = useContext(ThemeContext)

    function toggleTheme() {
        setTheme(!theme)
    }

    return (
        <>
        <div className={theme ? "row mynav-structure px-4 py-3 mb-5 mx-0" : " row mynav-structure-dark px-4 py-3 mb-5 mx-0"}>
            <div className="col p-0">
                <img src="/nutchanon.co.logo.png" height="40px"/><span className="mx-3 mynav-brand">Crypto</span>
            </div>
            <div className="col p-0 text-end">
                {
                    theme ? <img src="/moon.png" width="20px" className="mt-2 toggle-theme" onClick={toggleTheme}/>
                    :
                    <img src="/moon-dark.png" width="20px" className="mt-2 toggle-theme" onClick={toggleTheme}/>
                }
            </div>
        </div>
        </>
    )
}