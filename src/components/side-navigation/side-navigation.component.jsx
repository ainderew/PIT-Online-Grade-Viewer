import React from "react"
import "./side-navigation.style.css"
import {SideNavUl} from "../side-navigation-ul/side-navigation-ul.component"

export const SideNavigation = () =>{
    
    return(
        <div className="side-nav">
            <div className="sec-1 sec"><h1>PIT Online</h1></div>
            <div className="sec-2 sec"><p>NAVIGATION</p></div>
            <div className="sec-3">
                <SideNavUl />
            </div>
            <div className="sec-4 sec"><p>OPTIONS</p></div>
            <div className="sec-5 sec"></div>
        </div>
    )
}