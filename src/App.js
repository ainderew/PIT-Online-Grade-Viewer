import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {LoginPage} from "./components/Login-Page/login-page.component"
import {LoggedInPage} from "./components/LoggedIn-Page/Page/loggedin-page.component"

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      redirect: "/loggedin",
      userInfo : {},
      test: "test"
    }
    
  }
  

  render() {
    return (
      <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/loggedin" component={LoggedInPage}/>
        </Switch>
  
      </div>
      </Router>
    )
  }
  
}

export default App;
