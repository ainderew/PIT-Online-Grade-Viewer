import React, {useState} from "react";
import "./subject-list-ul.style.css"
import {useSelector,useDispatch} from "react-redux";
import {teacherSubject} from "../../../actions"

export const SubjectList = (props) =>{

    const userInfo = useSelector((state) => state.logInfoReducer)
    const dispatch = useDispatch();

    const [active,setActive] = useState({
        state: false,
        stateIndex: 0
    })
    const subjectSelected = async (subjected,index) =>{
        setActive({
            state: true,
            stateIndex: index
        })

        const data = {
            subjectNamed: subjected,
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

        // console.log(request)
        

    }

    // useEffect(() =>{
    //     subjectSelected(userInfo.subjects[0].subjectName,0)
    // },[])
    
    
    return(
        <ul className="subject-list-ul">
            {userInfo.subjects.map((subject,index) => {
                 if (active.state && active.stateIndex ===index){
                    return <li onClick={()=>subjectSelected(subject.subjectName,index)} className="subject-list-li subject-list-active-li" key={index}>
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
                    return <li onClick={()=>subjectSelected(subject.subjectName,index)} className="subject-list-li" key={index}>
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
                
            })}
        
        </ul>
       )
    }