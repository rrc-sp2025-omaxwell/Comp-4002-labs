import "./header.css";
import logo from "../../../assets/logo.svg"

import { useLocation } from "react-router-dom"

function Header() {
    // grab pathname
    const pathLocation = useLocation();

    // determine header text based on path
    // Default
    let headerText = "Welcome to Pixell River Financial"

    if (pathLocation.pathname === "/employees") {
        headerText = "Pixell River Employee Directory";
    } 

    if (pathLocation.pathname === "/organization") {
        headerText = "Pixell River Organization Directory";
    } 

    return(
        <header>
            <img src={logo} alt="Pixell River Logo" className="header-PRF-logo"/>
            <h1 className="header-text">{headerText}</h1>
        </header>
    )
}

export default Header;