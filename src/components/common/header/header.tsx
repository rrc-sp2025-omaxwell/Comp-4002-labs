import "./header.css";
import logo from "../../../assets/logo.svg"

function Header() {
    return(
        <header>
            <img src={logo} alt="Pixell River Logo" className="header-PRF-logo"/>
            <h1 className="header-text">Pixell River Employee Directory</h1>
        </header>
    )
}

export default Header;