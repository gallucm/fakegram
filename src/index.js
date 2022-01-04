import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { App } from "./App";
import store from "./store";

import "./styles.css";
// import { Footer } from "./components/ui/Footer";

ReactDOM.render(
  // <Footer>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  // </Footer>,
  document.getElementById("root")
);
