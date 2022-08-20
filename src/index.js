import React from "react";
import * as ReactDOM from 'react-dom';
import App from './App.js'
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css'
import { Provider } from 'react-redux';
import store from './app/store'



ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
    , document.getElementById('root'));
