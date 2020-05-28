import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {LoginPage} from "./components/Login-Page/login-page.component"
import {LoggedInPage} from "./components/LoggedIn-Page/loggedin-page.component"

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={LoginPage}/>
        <Route path="/loggedin" component={LoggedInPage}/>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
