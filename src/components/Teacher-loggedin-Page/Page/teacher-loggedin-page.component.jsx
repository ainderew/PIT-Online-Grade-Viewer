import React, {useState} from "react";
import "./teacher-loggedin-page.style.css"
import {BrowserRouter as Router, Switch, Route, useHistory} from "react-router-dom"
import {SideNavigation} from "../../side-navigation/side-navigation.component"
import {UserHeader} from "../../LoggedIn-Page/user-header/user-header.component"
import {TeacherHome} from "../teacher-loggedin-home/teacher-loggedin-home.component"
import {SubmitGrade} from "../teacher-loggedin-submit-grades/teacher-loggedin-submit.component"

export const TeacherLoggedInPage = () =>{
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
            <div className="teacher-loggedin-page">
                <SideNavigation navigationData={navigationData} />
                <div className="main-container-loggedinPage">
                    <UserHeader />
                    <Switch>
                        <Route path="/TeacherLoggedin" exact component ={TeacherHome} />
                        <Route path="/TeacherLoggedin/SubmitGrade" component ={SubmitGrade} />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}