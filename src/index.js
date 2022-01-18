// @flow

import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";

import App from "./App";

// FIXME: in TS, we don't need this IF
const container = document.getElementById("app");

if (container) {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    container
  );
}
