import React from "react"
import "./loggedin-page.style.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {SideNavigation} from "../../side-navigation/side-navigation.component"
import {UserHeader} from "../user-header/user-header.component"
import {ViewGradesPage} from "../../View-Grades-Page/Page/view-grades-page.component"
import {LoggedInHomePage} from "../../Loggedin-Home-Page/loggedin-home-page.component"


export const LoggedInPage = () =>{
    return(
        <Router>
            <div className="loggedInPage">
                <SideNavigation />
                <div className="main-container-loggedinPage">
                    <UserHeader />
                    <Switch>
                        <Route path="/loggedin" exact component={LoggedInHomePage} />
                        <Route path="/loggedin/grades" component={ViewGradesPage} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}