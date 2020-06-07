import React, {useState} from "react";
import "./admin-loggedin-page.style.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {SideNavigation} from "../../side-navigation/side-navigation.component"
import {UserHeader} from "../../LoggedIn-Page/user-header/user-header.component"
import {AdminHome} from "../admin-loggedin-home/admin-loggedin-home.component"

export const AdminLoggedInPage = () =>{
    const [navigationData] = useState([
        {
            linkName: "Home",
            linkAddress: "/loggedin",
            linkSubMenu: false,
            
        },
        {
            linkName: "Teacher",
            linkAddress: "",
            linkSubMenu: true,
            subMenuLi: [
                {
                    linkAddress: "/TeacherLoggedin/SubmitGrade",
                    linkName: "Submit Grades"
                    
                },
                {
                    linkAddress: "/prospectus",
                    linkName: "Handled Subjects"
                    
                }
            ]
        },
        {
            linkName: "Enrollment",
            linkAddress: "",
            linkSubMenu: false
        }
    ])

    return(

        <Router>
            <div className="admin-loggedin-page">
                <SideNavigation navigationData={navigationData} />
                <div className="admin-loggedin-page-container">
                    <UserHeader />
                    <Switch>
                        <Route path="/AdminLoggedin" exact component={AdminHome} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}