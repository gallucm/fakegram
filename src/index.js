import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import TimeAgo from 'javascript-time-ago'

import es from 'javascript-time-ago/locale/es-AR.json'

import { App } from "./App";
import store from "./store";

import "./styles.css";


TimeAgo.addDefaultLocale(es)
TimeAgo.addLocale(es)


ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById("root")
);
