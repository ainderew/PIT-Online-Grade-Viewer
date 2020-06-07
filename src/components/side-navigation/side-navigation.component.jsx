import React from "react"
import "./side-navigation.style.css"
import {SideNavUl} from "./side-navigation-ul/side-navigation-ul.component"
import PitLogo from "../../assets/PitLogo.png"

export const SideNavigation = (props) =>{
   
    return(
        <div className="side-nav">
            <div className="sec-1 sec">
                <img className="sidenav-pit-logo" src={PitLogo} alt="PIT Logo"/>
                <h1 className="sidenav-pit-logo-text">Palompon Institute of Technology</h1>
            </div>
            <div className="sec-2 sec"><p>NAVIGATION</p></div>
            <div className="sec-3">
                <SideNavUl navigationData={props.navigationData} />
            </div>
            <div className="sec-4 sec"><p>OPTIONS</p></div>
            <div className="sec-5 sec"></div>
        </div>
    )
}