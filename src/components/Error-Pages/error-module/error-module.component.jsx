import React from "react"
import "./error-module.style.css"
import {useHistory} from "react-router-dom"

export const ErrorModule = (props) =>{
    let history = useHistory();
    const relogin = () =>{
        history.push("/")
    }

    return(
        <div className="error-module-div">
            
                <img className="error-module-logo" src={props.ImageSrc} alt="Error Logo"/>
                <h1 className="error-module-text"> You have been logged out <br/> {props.ErrorMessage} </h1>
                <button onClick={relogin} className="error-module-button"><h1 className="error-module-button-text">Re-Login</h1></button>
            
        </div>
    )
}