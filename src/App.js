import React, { Component } from "react";
import "./App.css";
import Mainpage from "./comps/Mainpage";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Mainpage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
