import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Exchanges from './components/Exchanges';
import Cryptocurrencies from './components/Cryptocurrencies';
import News from './components/News';
import CryptoDetails from './components/CryptoDetails';

import './App.css'

const App = () => {
    return (
        <div className='App'>

            <div className='navbar'>
                <Navbar />
            </div>

            <div className='main'>
                <Layout>
                    <div className='Routes'>

                        <Switch>
                            <Route exact path='/'>
                                <Homepage />
                            </Route>
                            <Route exact path='/exchanges'>
                                <Exchanges />
                            </Route>
                            <Route exact path='/cryptocurrencies'>
                                <Cryptocurrencies />
                            </Route>
                            <Route exact path='/crypto/:coinId'>
                                <CryptoDetails />
                            </Route>
                            <Route exact path='/news'>
                                <News />
                            </Route>

                        </Switch>
                    </div>
                </Layout>
            <div className='footer' level={5} style={{ textAlign: "center" }}>
                <Typography.Title>
                    Cryptoverse <br />
                    All rights reserved
                </Typography.Title>

            </div>
            </div>
        </div>
    )
}

export default App