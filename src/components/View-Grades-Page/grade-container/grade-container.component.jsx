import React, {useEffect,useState} from "react";
import "./grade-container.style.css";

export const GradeContainer = (props) =>{
  // const subjectNameArray = props.data[props.index].grades.map(subject => subject.subjectName)
  // const subjectGradeArray = props.data[props.index].grades.map(subject => subject)

  const [gradeData, setGradeData] = useState([])

  const getData = async (subjectName,subjectId) =>{
    const request = {
      subjectName: subjectName,
      idNumber: props.studentIdNumber,
      year: props.data[props.index].semesterYear,
      semester: props.data[props.index].semester
    }

    await fetch("https://online-grade-viewer-api.herokuapp.com/Students/getGradeInfo",{
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(request)
      
    })
    .then(response => response.json())
    .then(data => {
      // const placeHolder = [...gradeData]
      setGradeData(gradeData => [...gradeData,data])
      console.log(data)
    })

  }
  useEffect(()=>{
    props.data[props.index].grades.map( subject => getData(subject.subjectName,subject.subjectId))
    
  },[])
  
  return(
    <div className="grade-container-div">
       <div className="grade-container-header">
          <h1 className="grade-container-semester-text">{props.data[props.index].semester} Semester {props.data[props.index].semesterYear}</h1>
       </div>
       <div className="grade-container-body">
         <div className="grade-container-left">
           <div className="grade-left-subject-header">
             <div className="subject-code grade-container-row"><h2 className="grade-container-header-text">Subject Code</h2></div>
             <div className="subject-name grade-container-row"><h2 className="grade-container-header-text">Subject Name</h2></div>
           </div>
            {gradeData.map(el=> {
              return <div className="grade-left-subject-information">
                <div className="grade-container-row"><h1 className="grade-container-main-text">{el.subjectCode}</h1></div>
                <div className="grade-container-row"><h1 className="grade-container-main-text">{el.subjectName}</h1></div>
              </div>
            })}
         </div>
          
          <div className="grade-container-right">
              <div className="grade-header-right">
                <div className="units-header grade-container-row"><h2 className="grade-container-header-text">Units</h2></div>
                <div className="MG-header grade-container-row"><h2 className="grade-container-header-text">MG</h2></div>
                <div className="FG-header grade-container-row"><h2 className="grade-container-header-text">FG</h2></div>
              </div>

              {gradeData.map(el=> {
              return <div className="grade-header-right">
                <div className="grade-container-row grades-container-row">{el.units}</div>
                <div className="grade-container-row grades-container-row">{el.MidtermGrade}</div>
                <div className="grade-container-row grades-container-row">{el.FinalGrade}</div>
              </div>
            })}
          </div>
       </div>
       <div className="grade-container-total">
         <div className="grade-total-column">
           <div className="grade-total-row">
             <div className="grade-total-row-left grade-container-row"><h1 className="grade-container-header-text" >GPA</h1></div>
             <div className="grade-total-row-right grade-container-row"><h1 className="grade-container-header-text">1.2</h1></div>
           </div>
         </div>

       </div>
    </div>
  )
}