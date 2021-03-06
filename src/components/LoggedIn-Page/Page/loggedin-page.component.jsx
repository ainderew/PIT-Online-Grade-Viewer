import React, {useState} from "react"
import "./loggedin-page.style.css"
import {BrowserRouter as Router, Switch, Route, useHistory} from "react-router-dom"
import {useSelector} from "react-redux"
import {SideNavigation} from "../../side-navigation/side-navigation.component"
import {UserHeader} from "../user-header/user-header.component"
import {ViewGradesPage} from "../../View-Grades-Page/Page/view-grades-page.component"
import {LoggedInHomePage} from "../../Loggedin-Home-Page/loggedin-home-page.component"

import HomeSvg from "../../../assets/home.svg"
import StudentSvg from "../../../assets/student.svg"
import SubjectsSvg from "../../../assets/subjects.svg"
import ScheduleSvg from "../../../assets/schedule.svg"

export const LoggedInPage = () =>{
    const userInfo = useSelector(state => state.logInfoReducer)
    let history = useHistory();


    const [navigationData] = useState([
        {
            linkIcon: HomeSvg,
            linkName: "Home",
            linkAddress: "/loggedin",
            linkSubMenu: false,
            
        },
        {
            linkIcon: StudentSvg,
            linkName: "Student",
            linkSubMenu: true,
            subMenuLi: [
                {
                    linkAddress: "/loggedin/grades",
                    linkName: "View Grades"
                    
                },
                {
                    linkAddress: "/prospectus",
                    linkName: "Prospectus"
                    
                }
            ]
        },
        {
            linkIcon: ScheduleSvg,
            linkName: "Schedule",
            // linkAddress: "",
            linkSubMenu: false
        },
        {
            linkIcon: SubjectsSvg,
            linkName: "Enrollment",
            linkAddress: "",
            linkSubMenu: false
        }
    ])

    const [menuStatus, setMenuStatus] = useState ({
        class: "side-nav",
        status: false
    })
    const menuToggler = () =>{
        if (menuStatus.status===false) {
            setMenuStatus({
                class: "side-nav-on",
                status: true
            })
        }else{
            setMenuStatus({
                class: "side-nav",
                status: false
            })
        }
        
    }

    if (Object.entries(userInfo).length === 0){
        history.push("/relogin")
        return(
            <div></div>
        )
    }else{
        return(
            <Router>
                <div className="loggedInPage">
                    <SideNavigation Status={menuStatus.class} navigationData={navigationData} />
                    <div className="main-container-loggedinPage">
                        <UserHeader MenuToggle={menuToggler} />
                        <Switch>
                            <Route path="/loggedin" exact component={LoggedInHomePage} />
                            <Route path="/loggedin/grades" component={ViewGradesPage} />
                        </Switch>
                    </div>  
                </div>
            </Router>
        )
    }
    

    
}