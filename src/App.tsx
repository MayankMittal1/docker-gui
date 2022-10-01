import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import Form from "./pages/Form";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/getStarted">
            <GetStarted />
          </Route>
          <Route path="/create">
            <Form />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
