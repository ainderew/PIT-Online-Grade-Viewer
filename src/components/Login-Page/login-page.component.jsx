import React, {useState, useEffect} from "react"
import "./login-page.style.css"
import PitLogo from "../../assets/PitLogo.png"
import UserLogo from "../../assets/user.svg"
import {useHistory} from  "react-router-dom"
import {useDispatch} from "react-redux"
import {login} from "../../actions"


export const LoginPage = () =>{
    let history = useHistory();
    const dispatch = useDispatch();

    
    const getUser = async () =>{
        const idNumber = document.getElementById("name-field")
        const password = document.getElementById("password-field");
        const request = {
            idNumber: idNumber.value,
            password: password.value
        }
        const data = await fetch("http://localhost:3000/Login",{
            method: "POST",
            mode:"cors",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(request)
        })
        .then(response=>response.json())
        .then(received => {
            if(received === "no user"){
              console.log(received)
            }
            if (received === "wrong password"){
                console.log(received)
            }
            if (typeof received === "object"){
                dispatch(login(received))
                history.push("/loggedin")
            }
        })
    }

   return(
        <div className="main-container">
            <div className="login-container">
                <div className="left">
                    <img className="logo" src={PitLogo} alt=""/>
                </div>

                <div className="right">
                    <img className="userLogo" src={UserLogo} alt="user logo"/>
                    <h1 className="right-text">Log into your Account</h1>
                    <form className="login-form" action="javascript:;" onSubmit={getUser} >
                        <div className="input-container">
                            <label htmlFor="idNumber">ID NUMBER </label>
                            <input id="name-field" className="input-field idNum" type="text" name="idNumber"/>
                        </div>
                        <div className="input-container">
                            <label htmlFor="password">PASSWORD   </label>
                            <input id="password-field" className="input-field pass" type="password" name="password"/>
                        </div>
                        <button className="submit-btn" type="submit" >Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}