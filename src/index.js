import "bulma/css/bulma.css";
import "./styles.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const el = document.querySelector("#root");
const root = createRoot(el);

/* Implement Redux store here */
root.render(<App />);
