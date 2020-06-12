import React from "react";
import "./confirmation-module.style.css";
import {useHistory} from "react-router-dom"

export const ConfirmationModule = (props) =>{
    const history = useHistory();

    let ID_NUMBER = props.UserData.idNumber
    if (props.IdParser){
        let holder =[];
        holder = ID_NUMBER.split("")
         holder.splice(2,0,"-")
         holder.splice(6,0,"-")
         ID_NUMBER= holder.join("")
       
    }

    const confirmForm = async (e) =>{
        e.preventDefault();
        const dataObj = {
            name: props.UserData.name,
            idNumber: props.UserData.idNumber,
            course: props.UserData.course,
            yearLevel: props.UserData.yearLevel,
            email: props.UserData.email,
            phone: props.UserData.phoneNumber
        }
        console.log(dataObj)
        // https://online-grade-viewer-api.herokuapp.com/createStudent/enrollmentForm
        await fetch("https://online-grade-viewer-api.herokuapp.com/createStudent/enrollmentForm",{
            method: "POST",
            mode: "cors",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(dataObj)
        })
        .then( response => response.json())
        .then( data => {
            if (data === "student enrolled"){
                history.push("/")
            }
        })

    }

    
  
    

    return(
        <div className={props.DisplayStatus}>
            <div className="confirmation-module-row-header">
                <h1 className="confirmation-module-header">Confirmation</h1> 
            </div>
            <div className="confirmation-module-row">
                <div className="confirmation-module-innerRow">
                    <div className="confirmation-module-col"> <h1 className="confirmation-module-text1">Name:</h1></div>
                    <div className="confirmation-module-col"> <h2 className="confirmation-module-text-data">{props.UserData.name}</h2></div>
                </div>
                <div className="confirmation-module-innerRow">
                    <div className="confirmation-module-col"> <h1 className="confirmation-module-text1">Id Number:</h1></div>
                    <div className="confirmation-module-col"> <h2 className="confirmation-module-text-data">{ID_NUMBER}</h2></div>
                </div>
                <div className="confirmation-module-innerRow">
                    <div className="confirmation-module-col"> <h1 className="confirmation-module-text1">Course:</h1></div>
                    <div className="confirmation-module-col"> <h2 className="confirmation-module-text-data">{props.UserData.course}</h2></div>
                </div>
                <div className="confirmation-module-innerRow">
                    <div className="confirmation-module-col"> <h1 className="confirmation-module-text1">Year Level:</h1></div>
                    <div className="confirmation-module-col"> <h2 className="confirmation-module-text-data">{props.UserData.yearLevel}</h2></div>
                </div>
                <div className="confirmation-module-innerRow">
                    <div className="confirmation-module-col"> <h1 className="confirmation-module-text1">Email:</h1></div>
                    <div className="confirmation-module-col"> <h2 className="confirmation-module-text-data">{props.UserData.email}</h2></div>
                </div>
                <div className="confirmation-module-innerRow">
                    <div className="confirmation-module-col"> <h1 className="confirmation-module-text1">Phone Number:</h1></div>
                    <div className="confirmation-module-col"> <h2 className="confirmation-module-text-data">{props.UserData.phoneNumber}</h2></div>
                </div>
            </div>
           <div className="confirmation-module-btn-container">
               <button className="confirmation-module-adjust-btn" onClick={props.ToggleOffModule}>Go Back</button>
               <button className="confirmation-module-confirm-btn" onClick={confirmForm}>Confirm</button>
           </div>
            
        </div>
    )
}