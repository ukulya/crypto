import {NavLink} from "react-router-dom";
import logo from "../assets/img/logo.png";
import {useState} from "react";

const Header = () => {
    const [scrolled,setScrolled] = useState(false)

    window.addEventListener('scroll',()=>{
        if (window.scrollY >= 50){
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    })
    return(
        <header>
            <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="logo"/>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/resources">Resources</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/team">Team</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/features">Features</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/community">Community</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/downloads">Downloads</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link custom-btn" to="/contacts">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header