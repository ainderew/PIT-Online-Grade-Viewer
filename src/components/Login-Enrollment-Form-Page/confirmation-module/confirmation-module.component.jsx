import React from "react";
import "./confirmation-module.style.css";

export const ConfirmationModule = (props) =>{

    return(
        <div className={props.DisplayStatus}>
            <div className="confirmation-module-row confirmation-module-row-header">
                <h1 className="confirmation-module-header">Confirmation</h1> 
            </div>
            <div className="confirmation-module-row">
                <h1 className="confirmation-module-text1">Name:  <span className="confirmation-module-text-data"> {props.UserData.name}</span> </h1>
            </div>
            <div className="confirmation-module-row">
                <h1 className="confirmation-module-text1">Id Number:  <span className="confirmation-module-text-data"> {props.UserData.idNumber}</span></h1>
            </div>
            <div className="confirmation-module-row">
                <h1 className="confirmation-module-text1">Course:  <span className="confirmation-module-text-data"> {props.UserData.course}</span></h1>
            </div>
            <div className="confirmation-module-row">
                <h1 className="confirmation-module-text1">Year Level:  <span className="confirmation-module-text-data"> {props.UserData.yearLevel}</span></h1>
            </div>
            
        </div>
    )
}