import React from "react"
import "./loggedin-page.style.css"
import {SideNavigation} from "../side-navigation/side-navigation.component"

export const LoggedInPage = () =>{
    return(
        <div className="loggedInPage">
            <SideNavigation />
            <h1>Logged In</h1>
        </div>
    )
}