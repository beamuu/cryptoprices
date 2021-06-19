import { useContext } from 'react'
import { ThemeContext } from './contexts/Theme'
import { H2 } from './H'

export default function Loading(props) {

    const { theme } = useContext(ThemeContext)

    return (
        <>
            <div className={`dynamic-page loading${theme ? "" : "-dark"} d-flex justify-content-center align-items-center`}>
                <div>
                    <H2 className="title-darkblue">Getting Cryptocurrency Prices ...</H2>
                    <p className="desc">Your page will be ready soon.</p>
                </div>
            </div>
        </>
    )
}