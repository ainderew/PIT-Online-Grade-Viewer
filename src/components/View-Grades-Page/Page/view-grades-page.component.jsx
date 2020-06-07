import React from "react";
import "./view-grades-page.style.css"
import {useSelector} from "react-redux";
import {GradeContainer} from "../grade-container/grade-container.component"

export const ViewGradesPage = () =>{
  const data = useSelector(state => state.logInfoReducer)


  return(
    <div className="view-grades-page">  
     {data.records.map((el,index) => <GradeContainer data={data.records} index={index} studentIdNumber={data.idNumber} /> )}
     
    </div>
  )
}