import React from "react";
import "./user-header.style.css"
import {useSelector} from "react-redux"
import {UserPicture} from "../user-picture/user-picture.component"
import {UserInfo} from "../user-information/user-info.component"
import {NotificationButton} from "../notification-button/notification-button.component"
import NotificationSVG from "../../../assets/notification.svg"
import AlertSVG from "../../../assets/alert.svg"
import MessageSVG from "../../../assets/message.svg"

export const UserHeader = () =>{

  const userInfo = useSelector(state => state.logInfoReducer)

  // const userInfo
  return(
    <div className="user-header-container">
      <div className="left-user-header">
        <UserPicture className="userPhotoHeader" path={userInfo.idPicture}/>
        <UserInfo userData={userInfo}/>
      </div>

      <div className="right-user-header">
        
       
        <NotificationButton icon={NotificationSVG} accessibility="notification" notification={userInfo.notification}/>
        <NotificationButton icon={AlertSVG} accessibility="alert" notification={userInfo.alert} />
        <NotificationButton icon={MessageSVG} accessibility="message" notification={userInfo.message}/>
        
      </div>
    </div>
  )
}