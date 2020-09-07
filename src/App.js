import React from 'react';
import Header from "./Header";
import TinderCards from "./TinderCards";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';

//install ES7 and Prettier from marketplace!!   

function App() {
  return (
    <div className="App">
    <Header /> 
    <Router>  
      <Switch>
      <Route path="/chat">
          <h1>Chatpg</h1>
        </Route>
        <Route path="/">
          <TinderCards />
        </Route>
      </Switch>
      
    </Router>
    </div>
  );
}

export default App;

{/* HEADER  (profile button     logo     chat btn*/}
 /*  <Header /> */

  {/* TINDER CARDS */}
  {/* BUTTONS BELOW TINDER CARDS   */}

  {/* CHAT SCREEN WHEN CLICKING ON TOP RIGHT ICON */}

  {/* INDIVIDUAL CHAT SCREEN WHEN PRESSING A MATCH */}