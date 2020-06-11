import React from "react";
import "./user-header.style.css"
import {useSelector} from "react-redux"
import {UserPicture} from "../user-picture/user-picture.component"
import {UserInfo} from "../user-information/user-info.component"
import {TeacherInfo} from "../../Teacher-loggedin-Page/teacher-information/teacher-information.component"
import {NotificationButton} from "../notification-button/notification-button.component"
import NotificationSVG from "../../../assets/notification.svg"
import AlertSVG from "../../../assets/alert.svg"
import MessageSVG from "../../../assets/message.svg"
import MenuSVG from "../../../assets/menu.svg"

export const UserHeader = (props) =>{

  const userInfo = useSelector(state => state.logInfoReducer)

  // const userInfo
  return(
    <div className="user-header-container">
      <div className="left-user-header">
        <UserPicture className="userPhotoHeader" path={userInfo.idPicture}/>
       {userInfo.accountType === "student" ?  <UserInfo userData={userInfo}/> : null}
       {userInfo.accountType === "teacher" ?  <TeacherInfo userData={userInfo}/> : null}
      </div>

      <div className="right-user-header">
        
       
        <NotificationButton icon={NotificationSVG} accessibility="notification" notificationType="Notifications" notificationIndicator={userInfo.notificationNumber} notificationList={userInfo.notificationList}/>
        <NotificationButton icon={AlertSVG} accessibility="alert" notificationType="Alerts" notificationIndicator={userInfo.alertNumber} notificationList={userInfo.alertList} />
        <NotificationButton icon={MessageSVG} accessibility="message" notificationType="Messages" notificationIndicator={userInfo.messageNumber} notificationList={userInfo.messageList} />
        
        
      </div>

      <div className="user-menu-header">
        <button onClick={props.MenuToggle} className="notification-button"><img className="notification-button-icon" src={MenuSVG} alt="Menu"/></button>
      </div>
    </div>
  )
}