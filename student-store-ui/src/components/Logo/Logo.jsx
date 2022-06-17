import * as React from "react"
import { Link } from "react-router-dom"
import codePathLogo from "../../assets/codepath.svg"

export default function Logo(){
    return (
    <div className="logo">
        <Link to="/"><img src={codePathLogo} alt="logo"/></Link>
    </div>
    )

}