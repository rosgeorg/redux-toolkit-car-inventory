import "bulma/css/bulma.css";
import "./styles.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./app/store";

const el = document.querySelector("#root");
const root = createRoot(el);

/* Implement Redux store here */
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
