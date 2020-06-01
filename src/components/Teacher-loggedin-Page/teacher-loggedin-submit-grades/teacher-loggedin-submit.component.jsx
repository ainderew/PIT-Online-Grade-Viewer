import React from "react"
import "./teacher-loggedin-submit.style.css";
import {useSelector} from "react-redux"
import {SubjectList} from "../../subject-list/subject-list-ul/subject-list-ul.component"

export const SubmitGrade = (props) =>{
    const userInfo = useSelector( state => state.logInfoReducer)

    return(
        <div className="submit-grade-div">
            <div className="submit-grade-left">
                <SubjectList Subjects = {userInfo.subjects} />
            </div>
            <div className="submit-grade-right">

            </div>
        </div>
    )
}