import React from "react"
import "./side-navigation-subMenu.style.css"
import {SideNavLi} from "../side-navigation-li/side-navigation-li.components"

export const SubMenu = (props) =>{

    return(
        <ul className="subMenu">
           {props.subMenuLi.map(li=> <SideNavLi linkAddress={li.linkAddress} linkName={li.linkName} />)}
        </ul>
    )
}