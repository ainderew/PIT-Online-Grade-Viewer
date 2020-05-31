import React from "react"
import "./relogin-page.style.css"
import {ErrorModule} from "../error-module/error-module.component"
import ReloginIcon from "../../../assets/relogin-icon.svg"

export const ReloginPage = () =>{

    return(
        <div className="relogin-page">
            < ErrorModule ImageSrc={ReloginIcon} ErrorMessage="Please Re-Login" />
        </div>
    )
}