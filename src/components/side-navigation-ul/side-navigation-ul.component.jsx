import React from "react"
import {useState} from "react"
import "./side-navigation-ul.style.css"
import {SideNavLi} from "../side-navigation-li/side-navigation-li.components"

export const SideNavUl = () =>{
    const [linksData] = useState({
        link1: "#link1",
        linkName1: "Home",
        link1SubMenu: true,
        subMenuLi:
        [
            {
                linkAddress: "/viewgrades",
                linkName: "View Grades"
                
            },
            {
                linkAddress: "/prospectus",
                linkName: "Prospectus"
                
            }
        ],
        link2: "#link2",
        linkName2: "Student",
        link3: "#link3",
        linkName3: "Enrollment"
        
    })
    return(
    <ul className="nav-ul">
        <SideNavLi linkAddress={linksData.link1} linkName={linksData.linkName1} />
        <SideNavLi linkAddress={linksData.link2} linkName={linksData.linkName2} subMenuLogic={linksData.link1SubMenu} subMenuLi={linksData.subMenuLi} />
        <SideNavLi linkAddress={linksData.link3} linkName={linksData.linkName3} />
    </ul>
    )
}