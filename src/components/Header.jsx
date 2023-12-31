import { useState } from "react"
import { NavLink } from "react-router-dom";
import logo from "../assets/shared/desktop/logo-dark.png";

export default function Header() {
    const [expanded, setExpanded] = useState(false);

    function handleClick() {
        setExpanded(expanded === false ? true : false)
    }
    

    return (
        
        <>
        <header className="flex">
            <div className="header-img">
            <NavLink to="/"><img  src={logo}></img></NavLink>
            </div>
            <button className="mobile-nav-toggle" aria-expanded={expanded} onClick={handleClick}>
            <span className="sr-only">Menu</span>
            </button>
            <nav className="uppercase">
                <ul className="flex primary-navigation ff-sanserif"  data-visible={expanded}>
                    <li><NavLink to = "../about">Our Company</NavLink></li>
                    <li><NavLink to = "../locations">Locations</NavLink></li>
                    <li><NavLink to = "../contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
        <div id="darken-menu" data-visible={expanded}></div>
        </>
    )
}