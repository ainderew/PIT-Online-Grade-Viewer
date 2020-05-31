import React, {useState,useEffect} from "react"
import "./admin-login-page.style.css";
import PITLogo from "../../assets/PitLogo.png"
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux"
import {login} from "../../actions"


export const AdminLoginPage = () =>{
    const history = useHistory();
    const dispatch = useDispatch();

    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")

    const onChangeUserName = (event) =>{
        setUserName(event.target.value)
    }
    const onChangePassword = (event) =>{
        setPassword(event.target.value)
    }


    return(
        <div className="admin-page-div">
            <div className="admin-login-container">
                <img className="admin-login-logo" src={PITLogo} alt="Pit Logo"/>
                <form className="admin-login-form" onSubmit="">
                    <div className="admin-input-div">
                        <label className="admin-login-label" htmlFor="userName" >USER ID</label>
                        <input className="admin-login-inputField" type="text" name="userName" value={userName} onChange={onChangeUserName} />
                    </div>
                    <div className="admin-input-div">
                        <label className="admin-login-label" htmlFor="userName" >PASSWORD</label>
                        <input className="admin-login-inputField" type="password" name="password" value={password} onChange={onChangePassword} />
                    </div>
                    <button className="admin-login-btn" type="submit">Log In</button>
                </form>
            </div>

        </div>
    )
}