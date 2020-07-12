import React from "react";
import "./App.css";
import { Home } from "./entry/Home";
import { About } from "./about/About";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
            </Switch>
        );
    }
}

export default App;
