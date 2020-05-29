import React from "react"
import "./user-picture.style.css";
import UserSVG from "../../../assets/user.svg"

export const UserPicture = (props) =>{
  let imgPath = "";
  (props.path === undefined || null) ? imgPath = UserSVG : imgPath = props.path;
  return(
    <img className="userPhoto-component" src={imgPath} alt="" />
  )
}