import React from 'react';
import { BrowserRouter as HashRouter, Route, Switch } from "react-router-dom";
import './App.css';
// Bootstrap
import Nav from "./components/NavComponent";
// Pages
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/">
          <AboutMe/>
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
      </Switch>
    </div>
    </HashRouter>

  );
}

export default App;