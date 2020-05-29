import React from "react";
import "./user-info.style.css";

export const UserInfo = (props) =>{
  const idFormat = () =>{
    let userId = [];
    let output
    userId = props.userData.idNumber.split("")
    userId.splice(2,0,"-");
    output = userId.join("")
    console.log(output)
    return output;

  }
  return(
    <div className="user-info-div">
      <h2>Welcome</h2>
      <h1 className="user-info-text">{props.userData.name}</h1>
      <h1 className="user-info-text">{props.userData.course} {props.userData.yearLevel}</h1>
      {/* <h1 className="user-info-text">{idFormat()}</h1> */}
    </div>
  )
}