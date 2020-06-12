import React, {useState} from "react";
import "./submit-grades-screen.style.css"
// import {useSelector} from "react-redux"
import CheckBtn from "../../../../assets/checkBtn.svg"

export const SubmitGradeScreen = (props) =>{

    // const props.subjectData = useSelector(state => state.teacherSubjectInfo)
    const [midtermGrades,setMidtermGrades] = useState(props.subjectData.students.map(el=>{
        return {grade:""}
    }))
    const [finalGrades,setFinalGrades] = useState(props.subjectData.students.map(el=>{
        return {grade:""}
    }))

   
    const onGradeChange = (index,event,gradingPeriod,gradingPeriodSetter) =>{
        let holder = [...gradingPeriod]
        let obj = {grade: event.target.value}
        holder.splice(index,1,obj)
        gradingPeriodSetter(holder)
    }
    const submitGrade = async (name,idNumber,index,event,gradingPeriod,gradeField,subjectName,year,semester) =>{
        event.preventDefault()
        const obj = {
            name: name,
            id: idNumber,
            grade:gradingPeriod[index].grade,
            gradeField: gradeField,
            subjectName: subjectName,
            year: year,
            semester: semester
        }
        console.log(obj);
        // console.log(obj);
        await fetch("https://online-grade-viewer-api.herokuapp.com/Teacher/submitGrades",{
            method: "POST",
            mode: "cors",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }
    
    return(
        <div className="submit-grade-screen">
            <div className="submit-grade-screen-row1">
                <h1 className="submit-grade-screen-text">{props.subjectData.subjectName} ({props.subjectData.sectionCode}) </h1>
                <h2 className="submit-grade-screen-text2">{props.subjectData.subjectSchedule}</h2>
            </div>
            <div className="submit-grade-screen-row2">
                <ul className="submit-grade-ul">
                    <li className="submit-grade-li">
                        <div className="submit-grade-li-div">
                            <div className="submit-grade-li-div-name">
                                <h1 className="submit-grade-screen-text3"> Name: </h1>
                            </div>
                            <div className="submit-grade-li-div-idNumber">
                                <h1 className="submit-grade-screen-text3"> Id Number:</h1>
                            </div>
                            
                        </div>
                        
                    </li>
                    {props.subjectData.students.map((student,index) =>{
                        
                            return <li key={index} className="submit-grade-li">
                            <div className="submit-grade-li-div">
                                <div className="submit-grade-li-div-name">
                                    <h1 className="submit-grade-screen-text2">{index+1} {student.name} </h1>
                                </div>
                                <div className="submit-grade-li-div-idNumber">
                                    <h1 className="submit-grade-screen-text2">{student.idNumber} </h1>
                                </div>
                                <div className="submit-grade-li-div-MG">
                                    <form method="POST" className="submit-grade-MG-form" onSubmit={(event)=>submitGrade(student.name,student.idNumber,index,event,midtermGrades,"MidtermGrade",props.subjectData.subjectName,props.subjectData.year,props.subjectData.semester)}>
                                        <input className = "submit-grade-input"
                                         type="text" name="MG" placeholder="Midterm Grade" value={midtermGrades[index].grade} onChange={(event)=>onGradeChange(index,event,midtermGrades,setMidtermGrades)} />
                                        <button className="submit-grade-btn" type="submit"><img className="submit-grade-submit-btn-svg" src={CheckBtn} alt=""/></button>
                                    </form>
                                </div>
                                <div className="submit-grade-li-div-FG">
                                    <form method="POST" className="submit-grade-FG-form" onSubmit={(event)=>submitGrade(student.name,student.idNumber,index,event,finalGrades,"FinalGrade",props.subjectData.subjectName,props.subjectData.year,props.subjectData.semester)}>
                                        <input className = "submit-grade-input"
                                         type="text" name="FG" placeholder="Final Grade" value={finalGrades[index].grade} onChange={(event)=>onGradeChange(index,event,finalGrades,setFinalGrades)} />
                                        <button className="submit-grade-btn" type="submit"><img className="submit-grade-submit-btn-svg" src={CheckBtn} alt=""/></button>
                                    </form>
                                </div>
                            </div>
                        </li>
                        // }else{
                        //     return <li key={index} className="submit-grade-li submit-grade-li-odd">
                        //     <div className="submit-grade-li-div">
                        //     <div className="submit-grade-li-div-name">
                        //             <h1 className="submit-grade-screen-text2">{index+1 } { student.name} </h1>
                        //         </div>
                        //         <div className="submit-grade-li-div-idNumber">
                        //             <h1 className="submit-grade-screen-text2">{student.idNumber} </h1>
                        //         </div>
                        //         <div className="submit-grade-li-div-MG">
                        //             <form className="submit-grade-MG-form"  onSubmit={(event)=>submitGrade(student.name,student.idNumber,index,event,midtermGrades)}>
                        //                 <input className = "submit-grade-input"
                        //                  type="text" name="MG" placeholder="Midterm Grade" value={midtermGrades[index].grade} onChange={(event)=>onGradeChange(index,event,midtermGrades,setMidtermGrades)} />
                        //                 <button className="submit-grade-btn" type="submit"><img className="submit-grade-submit-btn-svg" src={CheckBtn} alt=""/></button>
                        //             </form>
                        //         </div>
                        //         <div className="submit-grade-li-div-FG">
                        //             <form className="submit-grade-FG-form" onSubmit={(event)=>submitGrade(student.name,student.idNumber,index,event,finalGrades)}>
                        //                 <input className = "submit-grade-input"
                        //                 type="text" name="FG" placeholder="Final Grade" value={finalGrades[index].grade} onChange={(event)=>onGradeChange(index,event,finalGrades,setFinalGrades)} />
                        //                 <button className="submit-grade-btn" type="submit"> <img className="submit-grade-submit-btn-svg" src={CheckBtn} alt=""/> </button>
                        //             </form>
                        //         </div>
                        //     </div>
                        // </li>
                        // }
                    })}
                </ul>
            </div>
        </div>
    )
}