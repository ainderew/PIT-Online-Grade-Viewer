import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {LoginPage} from "./components/Login-Page/login-page.component"
import {LoggedInPage} from "./components/LoggedIn-Page/Page/loggedin-page.component"
import {ReloginPage} from "./components/Error-Pages/Relogin-Page/relogin-page.component"
import {AdminLoginPage} from "./components/Admin-Login-Page/admin-login-page.component"
import {TeacherLoggedInPage} from "./components/Teacher-loggedin-Page/Page/teacher-loggedin-page.component"
import {AdminLoggedInPage} from "./components/Admin-Loggedin-Page/Page/admin-loggedin-page.component"

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      redirect: "/loggedin",
      userInfo : {}
    }
    
  }
  

  render() {
    return (
      <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/loggedin" component={LoggedInPage}/>
          <Route path="/relogin" component={ReloginPage}/>
          <Route path="/teacherLogin" component={AdminLoginPage}/>
          <Route path="/TeacherLoggedin" component={TeacherLoggedInPage}/>
          <Route path="/AdminLoggedin" component={AdminLoggedInPage}/>
        </Switch>
  
      </div>
      </Router>
    )
  }
  
}

export default App;
