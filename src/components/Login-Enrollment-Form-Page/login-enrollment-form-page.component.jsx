import React, {useState} from "react";
import "./login-enrollment-form-page.style.css"
import PitLogo from "../../assets/PitLogo.png"
import Question from "../../assets/question.svg"
import {ConfirmationModule} from "./confirmation-module/confirmation-module.component"

export const LoginEnrollment = () =>{

    const [code,setCode] = useState({
        Value: "",
        Status: "login-enrollment-code-form on"
    })

    const [formData, setFormData] = useState({
        Status: "login-enrollment-student-form off",
        name: "",
        idNumber:"",
        course: "",
        yearLevel: "",
        email: "",
        phoneNumber: "1"
    })
    const onChangeFormData = (key,e) =>{
        // const obj = {}
        // obj[key] = e.target.value;
        setFormData({
            ...formData,
            [`${key}`]: e.target.value
        })
    }

    const [confirmationStatus, setConfirmationStatus] = useState("confirmation-module off")

    const onChangeCodeValue = (e) =>{
        setCode({
            ...code,
            Value: e.target.value
        })
    }

    const checkCode = async (e) =>{
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

    const confirmation = () =>{
        setConfirmationStatus("confirmation-module on")
        setFormData({
            ...formData,
            Status: "login-enrollment-student-form off"
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
            <ConfirmationModule DisplayStatus={confirmationStatus} UserData={formData} />
            <form onSubmit={checkCode} className={code.Status}>
                <img className="login-enrollment-code-img" src={Question} alt=""/>
                <div className="login-enrollment-information-div">
                    <h2 className="login-enroll-infoText">Use the code given to you </h2>
                </div>
                <div className="login-enrollment-code-input-div">
                    <label className="login-enrollment-label" htmlFor="">Enrollment Code</label>
                    <input className="login-enrollment-input login-enrollment-code-input" type="text" value={code.Value} onChange={onChangeCodeValue    }/>
                </div>
                <button className="login-enrollment-code-btn" >Submit</button>
            </form>

            <form className={formData.Status}>
               <div className="login-enrollment-student-form-row1">
                   <div className="login-enrollment-code-input-div">
                       <label className="login-enrollment-label" htmlFor="">Name</label>
                       <input className="login-enrollment-input login-enrollment-fName" type="text" value={formData.name} onChange={(e)=>onChangeFormData("name",e)} />
                   </div>
                   <div className="login-enrollment-code-input-div">
                       <label className="login-enrollment-label" htmlFor="">Id Number</label>
                       <input className="login-enrollment-input login-enrollment-idNumber" type="number" value={formData.idNumber} onChange={(e)=>onChangeFormData("idNumber",e)}/>
                   </div>
               </div>
               <div className="login-enrollment-student-form-row2">
                   <div className="login-enrollment-code-input-div">
                       <label className="login-enrollment-label" htmlFor="">Course</label>
                       <select className="login-enrollment-input" value={formData.course} onChange={(e)=>onChangeFormData("course",e)}>
                           <option value="Junior High School">Junior High School</option>
                           <option value="Senior High School">Senior High School</option>
                       </select>
                   </div>
               </div>
               <div className="login-enrollment-student-form-row3">
                   <div className="login-enrollment-code-input-div">
                       <label className="login-enrollment-label" htmlFor="">Year Level</label>
                       <select className="login-enrollment-input" value={formData.yearLevel} onChange={(e)=>onChangeFormData("yearLevel",e)}>
                           <option value="Junior High School">Grade 7</option>
                           <option value="Senior High School">Grade 8</option>
                           <option value="Senior High School">Grade 9</option>
                           <option value="Senior High School">Grade 10</option>
                           <option value="Senior High School">Grade 11</option>
                           <option value="Senior High School">Grade 12</option>
                       </select>
                   </div>
               </div>
               <div className="login-enrollment-student-form-row4">
                   <div className="login-enrollment-code-input-div">
                       <label className="login-enrollment-label" htmlFor="">Email</label>
                       <input className="login-enrollment-input login-enrollment-email" type="text" value={formData.email} onChange={(e)=>onChangeFormData("email",e)}/>
                   </div>
               </div>
               <div className="login-enrollment-student-form-row5">
                   <div className="login-enrollment-code-input-div">
                       <label className="login-enrollment-label" htmlFor="">Contact Number</label>
                       <input className="login-enrollment-input login-enrollment-phone" type="number" value={formData.phoneNumber} onChange={(e)=>onChangeFormData("phoneNumber",e)}/>
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