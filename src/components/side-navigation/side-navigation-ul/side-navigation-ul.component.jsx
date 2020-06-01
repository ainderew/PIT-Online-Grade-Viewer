import React from "react"
import "./side-navigation-ul.style.css"
import {SideNavLi} from "../side-navigation-li/side-navigation-li.components"

export const SideNavUl = (props) =>{
    console.log(props.navigationData)
    return(
    <ul className="nav-ul">

        {props.navigationData.map( el => <SideNavLi linkAddress={el.linkAddress} linkName={el.linkName} subMenuLogic={el.linkSubMenu} subMenuLi={el.subMenuLi} /> )}
        
    </ul>
    )
}