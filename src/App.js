import React, { useEffect, useState } from 'react';
import './App.css';


// Context
import { ThemeProvider } from './components/contexts/Theme'
import { CurrencyProvider } from './components/contexts/Currency';
import { DisplayProvider } from './components/contexts/Display'

// Components
import Background from './components/Background'
import Block from './components/Block'
import Card from './components/Card'
import Loading from './components/Loading'
import Nav from './components/Nav'
import Selector from './components/Selector'
import Footer from './components/Footer'
import MainWindow from './components/MainWindow'
import { H3 } from './components/H'

// Display mode now show in Window.js (Component)
import Window from './components/Window'
function App() {

    const [data, setData] = useState(null)
    const [quotes, setQuotes] = useState(null)
    const [search, setSearch] = useState(null)
    useEffect(() => {
        fetch("https://api.bitkub.com/api/market/ticker")
            .then(res => res.json())
            .then(res => {
                setData(res)
                setQuotes(Object.keys(res))
            })
        // console.log(Object.keys(r).length)

    }, [])

    return (
        <>
            <DisplayProvider>
                <CurrencyProvider>
                    <ThemeProvider>
                        <Background>
                            <Nav />

                            {
                                data ? (<>
                                    <Block height="300px">
                                        <br /><br /><br /><br /><br /><br />
                                        <H3>Today's Cryptocurrency Prices</H3>
                                        <p className="desc">Prices from <a className="mylink" href="https://bitkub.com">bitkub.com</a>. Prices won't automatically updated. Please refresh the page for the latest prices.</p>
                                    </Block>

                                    <Selector />


                                    <MainWindow data={data} />

                                    <Footer />
                                </>)
                                    :
                                    <Loading />
                            }
                        </Background>
                    </ThemeProvider>
                </CurrencyProvider>
            </DisplayProvider>
        </>
    );
}

export default App;
