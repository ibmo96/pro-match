import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TinderCards from "../TinderCards";

export default function CardsView() {
    return (
        <div className="App">
    
    <Router>  
      <Switch>
    <Route path="/profile">
        <h1>My Profile</h1>
    </Route>
      <Route path="/chat">
          <h1>Chatpg</h1>
        </Route>
        <Route exact path="/">
          <TinderCards />
        </Route>
      </Switch>
    </Router>
    </div>
    )
}
