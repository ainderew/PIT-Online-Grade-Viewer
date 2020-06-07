import React, {useState,useEffect} from "react";
import "./teacher-loggedin-page.style.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {SideNavigation} from "../../side-navigation/side-navigation.component"
import {UserHeader} from "../../LoggedIn-Page/user-header/user-header.component"
import {TeacherHome} from "../teacher-loggedin-home/teacher-loggedin-home.component"
import {SubmitGrade} from "../teacher-loggedin-submit-grades/Page/teacher-loggedin-submit.component"
import { useSelector,useDispatch } from "react-redux";
import {teacherSubject} from "../../../actions"


export const TeacherLoggedInPage = () =>{
    const userInfo = useSelector(state => state.logInfoReducer)
    const dispatch = useDispatch();
    const [navigationData] = useState([
        {
            linkName: "Home",
            linkAddress: "/teacherLoggedin",
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
    

    const initializeSubjects = async () =>{
        const data = {
            subjectNamed: userInfo.subjects[0].subjectName,
            name: userInfo.name
        }

        await fetch("https://online-grade-viewer-api.herokuapp.com/Teacher",{
        method: "POST",
        mode: "cors",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
        })
        .then(request=> request.json())
        .then(response=>{
            dispatch(teacherSubject(response))
        })
    }

    useEffect(() =>{
        initializeSubjects()
    },[])
    
    return(
        <Router>
            <div className="teacher-loggedin-page">
                <SideNavigation navigationData={navigationData} />
                <div className="teacher-container-loggedinPage">
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