import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // STEP 2: Import our routing library.
import './index.css';
import AppContainer from './container/appContainer';
import * as serviceWorker from './serviceWorker';
// STEP 3: Surround our main app with the "BrowserRouter".
ReactDOM.render(
    <BrowserRouter>
        <AppContainer />
    </BrowserRouter>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
