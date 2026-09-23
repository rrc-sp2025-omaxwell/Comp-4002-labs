import { NavLink } from "react-router";
import "./nav.css"

export function Nav() {
    return(
        <nav>
            <div className="page-links">

                <NavLink to="/employees">
                Employee Directory
                </NavLink>

                <NavLink to="/organization">
                Organization Directory
                </NavLink>

            </div>
        </nav>
    );
}