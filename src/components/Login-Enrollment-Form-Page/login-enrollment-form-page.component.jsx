import React, {useState} from "react";
import "./login-enrollment-form-page.style.css"
import PitLogo from "../../assets/PitLogo.png"
import Question from "../../assets/question.svg"
import {ConfirmationModule} from "./confirmation-module/confirmation-module.component"

export const LoginEnrollment = () =>{
    const [button,setButton] = useState(<button className="login-enrollment-code-btn" >Submit</button>  )
    const changeToLoader = () =>{
        setButton(<div className="lds-dual-ring-enrollment-code"></div>)
    }

    const [code,setCode] = useState({
        Value: "",
        Status: "login-enrollment-code-form on"
    })

    const onChangeCodeValue = (e) =>{
        setCode({
            ...code,
            Value: e.target.value
        })
    }

    
    const [formData, setFormData] = useState({
        Status: "login-enrollment-student-form off",
        name: "",
        idNumber:"",
        course: "",
        yearLevel: "",
        email: "",
        phoneNumber: ""
    })
    const onChangeFormData = (key,e) =>{
        setFormData({
            ...formData,
            [`${key}`]: e.target.value
        })
    }

    const [confirmationStatus, setConfirmationStatus] = useState({
        Status: "confirmation-module off",
        parseId: false
    })


  
    const checkCode = async (e) =>{
        changeToLoader()
        e.preventDefault();
        const bodyData={
            code: code.Value
        }
        await fetch("https://online-grade-viewer-api.herokuapp.com/createStudent/checkCode",{
            method: "POST",
            mode: "cors",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(bodyData)
        })
        .then(recieved => recieved.json())
        .then(data => {
            console.log(data)
            if (data !== null){setCode({
                ...code,
                Status: "login-enrollment-code-form off"
            }) 
            setFormData({
                ...formData,
                Status: "login-enrollment-student-form on"
            })}
            else console.log("sosad")
        })
    }


    const [classes, setClasses] = useState({
        nameInput: "login-enrollment-input login-enrollment-fName",
        idNumberInput: "login-enrollment-input login-enrollment-idNumber",
        courseInput: "login-enrollment-input",
        yearLevelInput: "login-enrollment-input"
    })
    
    const confirmation = () =>{
       if (formData.name === ""){
           setClasses({
               ...classes,
               nameInput: "login-enrollment-input login-enrollment-fName red"
           })

       }else if(formData.idNumber === ""){
           setClasses({
               ...classes,
               idNumberInput: "login-enrollment-input login-enrollment-idNumber red",
               nameInput: "login-enrollment-input login-enrollment-fName"
           })
       }else if(formData.course === ""){
           setClasses({
               ...classes,
               courseInput: "login-enrollment-input red",
               idNumberInput: "login-enrollment-input login-enrollment-idNumber",
               nameInput: "login-enrollment-input login-enrollment-fName"
           })
       }else if(formData.yearLevel === ""){
           setClasses({
               ...classes,
               yearLevelInput: "login-enrollment-input red",
               courseInput: "login-enrollment-input",
               idNumberInput: "login-enrollment-input login-enrollment-idNumber",
               nameInput: "login-enrollment-input login-enrollment-fName"
           })
       }else{
        setConfirmationStatus({
            Status: "confirmation-module on",
            parseId: true
        })
        setFormData({
            ...formData,
            Status: "login-enrollment-student-form off"
        })
        
       }
    }


    const yearLevelSelector = () =>{
        if (formData.course === "Junior High School"){
            return (
                <select required={true} className={classes.yearLevelInput} value={formData.yearLevel} onChange={(e)=>onChangeFormData("yearLevel",e)}>
                    <option value=""></option>
                    <option value="Grade 7">Grade 7</option>
                    <option value="Grade 8">Grade 8</option>
                    <option value="Grade 9">Grade 9</option>
                    <option value="Grade 10">Grade 10</option>
                </select>
            )
            
        }else if(formData.course === "Senior High School"){
            return (
                <select required={true} className={classes.yearLevelInput} value={formData.yearLevel} onChange={(e)=>onChangeFormData("yearLevel",e)}>
                    <option value=""></option>
                    <option value="Grade 11">Grade 11</option>
                    <option value="Grade 12">Grade 12</option>
                </select>
            )
        }
    }


    const adjustInfo = () =>{
          setConfirmationStatus({
            ...confirmationStatus,
            Status: "confirmation-module off"
        })
        setFormData({
            ...formData,
            Status: "login-enrollment-student-form on"
        })
    }

    return(
        <div className="login-enrollment-page">
            <div className="login-enrollment-header">
                <img className="login-enrollment-header-img" src={PitLogo} alt="Palompon Institute of Technology Logo"/>
                <div className="login-enrollment-header-text-container">
                    <h1 className="login-enrollment-text1"><span className="login-enroll-span">P</span>ALOMPON <span className="login-enroll-span">I</span>NSTITUTE OF <span className="login-enroll-span">T</span>ECHNOLOGY</h1>
                    <h2 className="login-enrollment-text2">A Charter State College since 1972</h2>
                </div>
            </div>

            <ConfirmationModule ToggleOffModule={adjustInfo} DisplayStatus={confirmationStatus.Status} IdParser={confirmationStatus.parseId} UserData={formData} />

            <form onSubmit={checkCode} className={code.Status}>
                <img className="login-enrollment-code-img" src={Question} alt=""/>
                <div className="login-enrollment-information-div">
                    <h2 className="login-enroll-infoText">Use the code given to you </h2>
                </div>
                <div className="login-enrollment-code-input-div">
                    <label className="login-enrollment-label" htmlFor="">Enrollment Code</label>
                    <input required={true} className="login-enrollment-input login-enrollment-code-input" type="text" value={code.Value} onChange={onChangeCodeValue    }/>
                </div>
                {button}
                {/* <button className="login-enrollment-code-btn" >Submit</button> */}
            </form>

            {/* STUDENT FORM */}
            <form className={formData.Status}>
               <div className="login-enrollment-student-form-row1">
                   <div className="login-enrollment-code-input-div">
                       <label className="login-enrollment-label" htmlFor="">Name</label>
                       <input required={true} className={classes.nameInput} type="text" value={formData.name} onChange={(e)=>onChangeFormData("name",e)} />
                   </div>
                   <div className="login-enrollment-code-input-div">
                       <label className="login-enrollment-label" htmlFor="">Id Number</label>
                       <input required={true} className={classes.idNumberInput} type="number" value={formData.idNumber} onChange={(e)=>onChangeFormData("idNumber",e)}/>
                   </div>
               </div>
               <div className="login-enrollment-student-form-row2">
                   <div className="login-enrollment-code-input-div">
                       <label className="login-enrollment-label" htmlFor="">Course</label>
                       <select required={true} className={classes.courseInput} value={formData.course} onChange={(e)=>onChangeFormData("course",e)}>
                           <option value=""></option>
                           <option value="Junior High School">Junior High School</option>
                           <option value="Senior High School">Senior High School</option>
                       </select>
                   </div>
               </div>
               <div className="login-enrollment-student-form-row3">
                   <div className="login-enrollment-code-input-div">
                       <label className="login-enrollment-label" htmlFor="">Year Level</label>
                        {yearLevelSelector()}
                   </div>
               </div>
               <div className="login-enrollment-student-form-row4">
                   <div className="login-enrollment-code-input-div">
                       <label className="login-enrollment-label" htmlFor="">Email</label>
                       <input required={true} className="login-enrollment-input login-enrollment-email" type="text" value={formData.email} onChange={(e)=>onChangeFormData("email",e)}/>
                   </div>
               </div>
               <div className="login-enrollment-student-form-row5">
                   <div className="login-enrollment-code-input-div">
                       <label className="login-enrollment-label" htmlFor="">Contact Number</label>
                       <input required={true} className="login-enrollment-input login-enrollment-phone" type="number" value={formData.phoneNumber} onChange={(e)=>onChangeFormData("phoneNumber",e)}/>
                   </div>
               </div>
               <div className="login-enrollment-student-form-row6">
                     <button type="button" className="login-enrollment-student-form-btn" onClick={confirmation} >Submit</button>
               </div>
              
            </form>

            <footer className="enrollment-footer">
                <h1 className="enrollment-footer-text">C Palompon Institute of Technology 2020</h1>
            </footer>
        </div>
    )
}