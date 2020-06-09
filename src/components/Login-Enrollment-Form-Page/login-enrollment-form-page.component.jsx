import React, {useState} from "react";
import "./login-enrollment-form-page.style.css"
import PitLogo from "../../assets/PitLogo.png"


export const LoginEnrollment = () =>{

    const [code,setCode] = useState({
        Value: "",
        Status: "login-enrollment-code-form"
    })

    return(
        <div className="login-enrollment-page">
            <div className="login-enrollment-header">
                <img className="login-enrollment-header-img" src={PitLogo} alt="Palompon Institute of Technology Logo"/>
                <div className="login-enrollment-header-text-container">
                    <h1 className="login-enrollment-text1">PALOMPON INSTITUTE OF TECHNOLOGY</h1>
                    <h2 className="login-enrollment-text2">A Charter State College since 1972</h2>
                </div>
            </div>

            <form action="" className={code.Status}>
                <div className="login-enrollment-code-input-div">
                    <label htmlFor="">Enrollment Code</label>
                    <input className="login-enrollment-input login-enrollment-code-input" type="text"/>
                </div>
                <button className="login-enrollment-code-btn">Submit</button>
            </form>

            <footer className="enrollment-footer">
                <h1 className="enrollment-footer-text">C Palompon Institute of Technology 2020</h1>
            </footer>
        </div>
    )
}