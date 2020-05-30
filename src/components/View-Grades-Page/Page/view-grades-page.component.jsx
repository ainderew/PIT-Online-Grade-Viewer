import React from "react";
import "./view-grades-page.style.css"
import {useSelector} from "react-redux";
import {GradeContainer} from "../grade-container/grade-container.component"

export const ViewGradesPage = () =>{
  const data = useSelector(state => state.logInfoReducer)

  const grader = data.records

  return(
    <div className="view-grades-page">  
     {grader.map((el,index) => <GradeContainer data={grader} index={index}/> )}
     {grader.map((el,index) => <GradeContainer data={grader} index={index}/> )}
    </div>
  )
}