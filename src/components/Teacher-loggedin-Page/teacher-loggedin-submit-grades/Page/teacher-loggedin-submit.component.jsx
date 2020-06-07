import React from "react"
import "./teacher-loggedin-submit.style.css";
import {useSelector} from "react-redux"
import {SubjectList} from "../../../subject-list/subject-list-ul/subject-list-ul.component"
import {SubmitGradeScreen} from "../submit-grades-screen/submit-grades-screen.component"

export const SubmitGrade = (props) =>{
    
    const subjectData = useSelector(state => state.teacherSubjectInfo)
    console.log(subjectData)

    return(
        <div className="submit-grade-div">
            <div className="submit-grade-left">
                <SubjectList />
            </div>
            <SubmitGradeScreen subjectData={subjectData} />
        </div>
    )
}