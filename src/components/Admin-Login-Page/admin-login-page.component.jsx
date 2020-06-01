import React, {useState,useEffect} from "react"
import "./admin-login-page.style.css";
import PITLogo from "../../assets/PitLogo.png"
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux"
import {login} from "../../actions"


export const AdminLoginPage = () =>{
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() =>{
        sessionStorage.removeItem("state")
    },[])
    

    const [userNameValue,setUserName] = useState("")
    const [passwordValue,setPassword] = useState("")

    const onChangeUserName = (event) =>{
        setUserName(event.target.value)
    }
    const onChangePassword = (event) =>{
        setPassword(event.target.value)
    }
    const [loginErrorIndicator,setIndicator] =useState("")
    const [button,setButton] = useState(<button className="admin-login-btn" type="submit">Log-in</button>)
    const changeToLoader = () =>{
        setButton(<div className="lds-dual-ring"></div>)
    }

    const getUser = async (event) =>{
        event.preventDefault()
        changeToLoader()
        const request = {
            idNumber: userNameValue,
            password: passwordValue
        }
        const data = await fetch("https://online-grade-viewer-api.herokuapp.com/Login/adminLogin",{
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
              setButton(<button className="submit-btn" type="submit">Log-in</button>)
              setIndicator(<h1 className="errorIndicator-text">Invalid Id Number</h1>)
            }
            if (received === "wrong password"){
                setButton(<button className="submit-btn" type="submit">Log-in</button>)
                setIndicator(<h1 className="errorIndicator-text">Wrong Password</h1>)
            }
            if (typeof received === "object"){
                dispatch(login(received))
                history.push("/teacherLoggedin")
            }
        })
    }


    return(
        <div className="admin-page-div">
            <h1 className="admin-login-upper-text"><span className="admin-logo-text-span">P</span>ALOMPON <span className="admin-logo-text-span">I</span>NSTITUTE OF <span className="admin-logo-text-span">T</span>ECHNOLOGY</h1>
            <h2 className="admin-login-upper-text2">A Charter State College since 1972</h2>
            <div className="admin-login-container">
                <img className="admin-login-logo" src={PITLogo} alt="Pit Logo"/>
                <form className="admin-login-form" onSubmit={getUser}>
                    <div className="admin-input-div">
                        <label className="admin-login-label" htmlFor="userName" >USER ID</label>
                        <input className="admin-login-inputField" type="text" name="userName" value={userNameValue} onChange={onChangeUserName} />
                    </div>
                    <div className="admin-input-div">
                        <label className="admin-login-label" htmlFor="userName" >PASSWORD</label>
                        <input className="admin-login-inputField" type="password" name="password" value={passwordValue} onChange={onChangePassword} />
                    </div>
                    {loginErrorIndicator}
                    {button}
                </form>
            </div>

        </div>
    )
}