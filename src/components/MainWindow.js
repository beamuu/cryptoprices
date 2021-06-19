import { useContext } from 'react'
import { ThemeContext } from './contexts/Theme'
import Window from './Window'
export default function MainWindow(props) {
    const { theme } = useContext(ThemeContext)
    const activeTheme = theme ? "light" : "dark"
    return (
        <div className={`py-3 bg-${activeTheme} full-width`}>
            <Window data={props.data} />
        </div>
    )
}