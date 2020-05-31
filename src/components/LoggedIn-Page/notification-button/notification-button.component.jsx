import React from 'react';
import "./notification-button.style.css";
import {NotificationExpanded} from "../notification-expanded/notification-expanded.component"

export const NotificationButton = (props) =>{
  const notifIndicator = props.notificationIndicator
  return(
    <div className="notification-button-div">
      <button className="notification-button"><img className="notification-button-icon" src={props.icon} alt={props.accessibility}/></button>
      {(notifIndicator > 0) ? <h1 className="notification-active-indicator">{notifIndicator}</h1> : null}
      <NotificationExpanded notificationType={props.notificationType} notificationList={props.notificationList} />
    </div>
  )
}