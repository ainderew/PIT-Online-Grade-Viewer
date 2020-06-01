import React, {useState,useEffect} from "react";
import "./subject-list-ul.style.css"

export const SubjectList = (props) =>{

    const [active,setActive] = useState({
        state: false,
        stateIndex: 0
    })
    const subjectSelected = (index) =>{
        setActive({
            state: true,
            stateIndex: index
        })
    }

    
    
    return(
        <ul className="subject-list-ul">
            {props.Subjects.map((subject,index) => {
                 {if (active.state && active.stateIndex ===index){
                    return <li onClick={()=>subjectSelected(index)} className="subject-list-li subject-list-active-li" key={index}>
                    <div className="subject-list-li-div subject-list-active">
                        <div className="subject-list-li-div-left">
                        <h1 className="subject-list-li-text"><span className="subject-list-span">Name:</span></h1>
                        <h1 className="subject-list-li-text"><span className="subject-list-span">Code:</span></h1>
                        <h1 className="subject-list-li-text"><span className="subject-list-span">Schedule:</span></h1>
                        <h1 className="subject-list-li-text"><span className="subject-list-span">Section:</span></h1>
                        </div>
                        <div className="subject-list-li-div-right">
                        <h1 className="subject-list-li-text">{subject.subjectName}</h1>
                        <h1 className="subject-list-li-text">{subject.subjectCode}</h1>
                        <h1 className="subject-list-li-text">{subject.subjectSchedule}</h1>
                        <h1 className="subject-list-li-text">{subject.sectionCode}</h1>
                        </div>
                
                    </div>
                </li>
                 }else{
                    return <li onClick={()=>subjectSelected(index)} className="subject-list-li" key={index}>
                    <div className="subject-list-li-div">
                        <div className="subject-list-li-div-left">
                        <h1 className="subject-list-li-text"><span className="subject-list-span">Name:</span></h1>
                        <h1 className="subject-list-li-text"><span className="subject-list-span">Code:</span></h1>
                        <h1 className="subject-list-li-text"><span className="subject-list-span">Schedule:</span></h1>
                        <h1 className="subject-list-li-text"><span className="subject-list-span">Section:</span></h1>
                        </div>
                        <div className="subject-list-li-div-right">
                        <h1 className="subject-list-li-text">{subject.subjectName}</h1>
                        <h1 className="subject-list-li-text">{subject.subjectCode}</h1>
                        <h1 className="subject-list-li-text">{subject.subjectSchedule}</h1>
                        <h1 className="subject-list-li-text">{subject.sectionCode}</h1>
                        </div>
                
                    </div>
                </li>
                 }
                }
            })}
        
        </ul>
       )
    }