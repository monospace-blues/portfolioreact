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
    <HashRouter basename="/">
    <div className="App">
      <Nav/>
      <Switch>
        <Route exact path="/" component={AboutMe}/>
        <Route path="/portfolio" component={Portfolio}/>
      </Switch>
    </div>
    </HashRouter>

  );
}

export default App;