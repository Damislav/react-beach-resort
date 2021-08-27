import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { RoomProvider } from "./context/context";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <RoomProvider>
    <Router>
      <App />
    </Router>
  </RoomProvider>,

  document.getElementById("root")
);

 
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
