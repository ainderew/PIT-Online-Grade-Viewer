import React from "react";
import "./notification-expanded.style.css";

export const NotificationExpanded = (props) =>{
    const expandList = props.notificationList;
    return(
        <ul className="notificationExpanded">
            <li className="notificationExpanded-LI notif-header-li"><h1 className="notificationExpanded-text"> {props.notificationType} </h1></li>
            {(expandList !== undefined ) ? expandList.map(element => {
                return <li className="notificationExpanded-LI"><h1 className="notificationExpanded-text">{element}</h1></li>
            }): null}
        </ul>
    )
}