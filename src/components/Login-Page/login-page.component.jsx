import React, {useState,useEffect} from "react"
import "./login-page.style.css"
import PitLogo from "../../assets/PitLogo.png"
import UserLogo from "../../assets/user.svg"
import {useHistory} from  "react-router-dom"
import {useDispatch} from "react-redux"
import {login} from "../../actions"


export const LoginPage = () =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const [button,setButton] = useState(<button className="student-login-btn" type="submit">Log-in</button>)
    const [loginErrorIndicator,setIndicator] =useState("")
    const [idNumberValue,setIdNumberValue] = useState("")
    const [passwordValue,setPasswordValue] = useState("")


    useEffect(() =>{
        sessionStorage.removeItem("state")
    },[])
    

    
    const getUser = async (event) =>{
        event.preventDefault()
        changeToLoader()
        const request = {
            idNumber: idNumberValue,
            password: passwordValue
        }
        await fetch("https://online-grade-viewer-api.herokuapp.com/Login",{
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
              setButton(<button className="student-login-btn" type="submit">Log-in</button>)
              setIndicator(<h1 className="errorIndicator-text">Invalid Id Number</h1>)
            }
            if (received === "wrong password"){
                setButton(<button className="student-login-btn" type="submit">Log-in</button>)
                setIndicator(<h1 className="errorIndicator-text">Wrong Password</h1>)
            }
            if (typeof received === "object"){
                dispatch(login(received))
                history.push("/loggedin")
            }
        })
    }

   

    const onChangeIdNumber = (event) =>{
        setIdNumberValue( event.target.value )
    }
    const onChangePassword = (event) =>{
        setPasswordValue(event.target.value)
    }

    const changeToLoader = () =>{
        setButton(<div className="lds-dual-ring"></div>)
    }

    const enrollmentBtn = () =>{
        history.push("/LoginEnrollment")
    }
   return(
        <div className="student-login-page">
            <h1 className="admin-login-upper-text"><span className="admin-logo-text-span">P</span>ALOMPON <span className="admin-logo-text-span">I</span>NSTITUTE OF <span className="admin-logo-text-span">T</span>ECHNOLOGY</h1>
            <h2 className="admin-login-upper-text2">A Charter State College since 1972</h2>
            <div className="admin-login-container">
                <img className="admin-login-logo" src={PitLogo} alt="Pit Logo"/>
                <form className="admin-login-form" onSubmit={getUser}>
                    <div className="admin-input-div">
                        <label className="admin-login-label" htmlFor="userName" >USER ID</label>
                        <input className="admin-login-inputField" type="text" name="userName" value={idNumberValue} onChange={onChangeIdNumber} />
                    </div>
                    <div className="admin-input-div">
                        <label className="admin-login-label" htmlFor="userName" >PASSWORD</label>
                        <input className="admin-login-inputField" type="password" name="password" value={passwordValue} onChange={onChangePassword} />
                    </div>
                    {loginErrorIndicator}
                    <div className="student-login-btn-conainter">
                        <button className="student-login-enroll-btn" onClick={enrollmentBtn}>Enrollment Form</button>
                        {button}
                    </div>
                </form>
            </div>

        </div>
        // <div className="login-main-page">
        //     <div className="login-container">
        //         <div className="login-container-left">
        //             <h1 className="logo-text">PIT <span className="logo-text-span">Online</span></h1>
        //             <h1 className="logo-subtext"><span className="logo-text-span">Grades</span> and Enrollment Online</h1>
        //             <img className="logo" src={PitLogo} alt=""/> 
        //             <h1 className="logo-text logo-text-lower">Palompon Institute of Technology</h1>
        //         </div>

        //         <div className="login-container-right">
        //             <img className="userLogo" src={UserLogo} alt="user logo"/>
        //             <h1 className="right-text">Log into your Account</h1>
        //             <form className="login-form" onSubmit={getUser} >
        //                 <div className="input-container">
        //                     <label className="login-label-text" htmlFor="idNumber">ID NUMBER </label>
        //                     <input className="input-field idNum" type="text" required={true} name="idNumber" value={idNumberValue} onChange={onChangeIdNumber}/>
        //                 </div>
        //                 <div className="input-container">
        //                     <label className="login-label-text" htmlFor="password">PASSWORD</label>
        //                     <input className="input-field pass" type="password" required={true} name="password" value={passwordValue} onChange={onChangePassword} />
        //                 </div>
        //                 {loginErrorIndicator}
        //                 {button}
                        
        //             </form>
        //         </div>
        //     </div>
        // </div>
    )
}