import React from "react"
import "./side-navigation-li.style.css"
import {SubMenu} from "../side-navigation-subMenu/side-navigation-subMenu.component"



export const SideNavLi = (props) =>{
    
    const subMenuLogic = props.subMenuLogic;
    const subMenuLi = props.subMenuLi
    return(
        <li className="nav-li"><a href={props.linkAddress}> {props.linkName}</a> {subMenuLogic?<SubMenu className="subMenu" subMenuLi={subMenuLi} />: null}</li>
       
    )
}