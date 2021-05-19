import React from 'react'
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom'
import {ApolloProvider} from "@apollo/client";
import {I18nextProvider} from "react-i18next";
import {apolloClient} from "./apolloClient";
import {Provider as StoreProvider} from 'react-redux'
import store from './redux/store';
import "antd/dist/antd.css";

import Router from "./router";
import i18n from "./translation";
import * as serviceWorker from "./serviceWorker";

const App = () => (
    <BrowserRouter>
        <StoreProvider store = {store} >
        <ApolloProvider client={apolloClient}>
            <I18nextProvider i18n={i18n}>
                <Router/>
            </I18nextProvider>
        </ApolloProvider>
        </StoreProvider>
    </BrowserRouter>
);

ReactDOM.render(<App/>, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
