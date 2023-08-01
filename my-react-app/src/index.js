import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
    <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root"));

//Challenge. Render all the notes inside notes.js as a seperate Note
//component.
