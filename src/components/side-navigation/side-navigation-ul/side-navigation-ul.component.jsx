import React from "react"
import "./side-navigation-ul.style.css"
import {SideNavLi} from "../side-navigation-li/side-navigation-li.components"

export const SideNavUl = (props) =>{

    return(
    <ul className="nav-ul">
        
        {props.navigationData.map( (el,index) => {
                return <SideNavLi key={index} linkIcon={el.linkIcon} linkAddress={el.linkAddress} linkName={el.linkName} subMenuLogic={el.linkSubMenu} subMenuLi={el.subMenuLi} submenuClassName="nav-li nav-li-active" />
          
        } )}
        
    </ul>
    )
}