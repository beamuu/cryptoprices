import { useContext } from 'react'
import { ThemeContext } from "./contexts/Theme"

export function H1(props) {
    const { theme } = useContext(ThemeContext)
    return (
        <h1 className={theme ? "" : "h-dark"}>{props.children}</h1>
    )
}
export function H2(props) {
    const { theme } = useContext(ThemeContext)
    return (
        <h2 className={theme ? "" : "h-dark"}>{props.children}</h2>
    )
}
export function H3(props) {
    const { theme } = useContext(ThemeContext)
    return (
        <h3 className={theme ? "" : "h-dark"}>{props.children}</h3>
    )
}
export function H4(props) {
    const { theme } = useContext(ThemeContext)
    return (
        <h4 className={theme ? "" : "h-dark"}>{props.children}</h4>
    )
}
export function H5(props) {
    const { theme } = useContext(ThemeContext)
    return (
        <h5 className={theme ? "" : "h-dark"}>{props.children}</h5>
    )
}
export function H6(props) {
    const { theme } = useContext(ThemeContext)
    return (
        <h6 className={theme ? "" : "h-dark"}>{props.children}</h6>
    )
}