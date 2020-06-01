import React, {useState} from "react";
import "./teacher-loggedin-page.style.css"
import {SideNavigation} from "../../side-navigation/side-navigation.component"

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
                    linkAddress: "/loggedin/grades",
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
        <div className="teacher-loggedin-page">
            <SideNavigation navigationData={navigationData} />
            <div className="main-container-loggedinPage"></div>
            
        </div>
    )
}