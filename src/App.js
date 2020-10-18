import React from 'react';
import {Header} from "./Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
//import './App.css';
import Signup from "./components/Signup"; 
import { Container } from "react-bootstrap" //import wrapped in curly brackets when its a named export, if its default export no curly brackets
import AuthProvider from "./contexts/AuthContext"
import CardsView from "./components/CardsView"
import Login from "./components/Login"

//install ES7 and Prettier from marketplace!!   

function App() {
  return (
      <div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style= {{ minHeight: "100vh" }}>

          <div className="w-100" style={{ maxWidth: "400px" }} >
            <Router>
              <AuthProvider>
                <Switch>
                  <Route exact path = "/" component={CardsView}>
                    <Header profileButton="/profile" 
                            chatButton = "/chat"/>
                  </Route>
                  <Route path="/signup" component={Signup}>
                    <Header/>
                  </Route>
                  <Route path="/login" component={Login}>
                    <Header/>
                  </Route>
                </Switch>
              </AuthProvider>
            </Router>
          </div>
      </Container>
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