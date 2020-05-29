import React from "react";
import "./user-header.style.css"
import {useSelector} from "react-redux"
import {UserPicture} from "../user-picture/user-picture.component"
import {UserInfo} from "../user-information/user-info.component"

export const UserHeader = () =>{

  const userInfo = useSelector(state => state.logInfoReducer)

  // const userInfo
  return(
    <div className="user-header-container">
      <div className="left-user-header"></div>

      <div className="right-user-header">
        <UserInfo userData={userInfo}/>
        <UserPicture className="userPhotoHeader" path={userInfo.idPicture}/>
      </div>
    </div>
  )
}