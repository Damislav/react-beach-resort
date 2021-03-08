import React, { Component } from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import SingleRoom from "./pages/SingleRoom";
import { Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
      </>
    );
  }
}
