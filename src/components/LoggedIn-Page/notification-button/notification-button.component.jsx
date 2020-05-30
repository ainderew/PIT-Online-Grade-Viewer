import React from 'react';
import "./notification-button.style.css";

export const NotificationButton = (props) =>{
  const notifIndicator = props.notification
  return(
    <div className="notification-button-div">
      <button className="notification-button"><img className="notification-button-icon" src={props.icon} alt={props.accessibility}/></button>
      {(notifIndicator > 0) ? <h1 className="notification-active-indicator">{notifIndicator}</h1> : null}
    </div>
  )
}