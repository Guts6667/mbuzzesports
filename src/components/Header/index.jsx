import React from "react";
import BurgerBtn from "../BurgerBtn";
import './Header.scss'


const Header = () => {

    
    return(
        <header>
            <BurgerBtn />
            <img src="/assets/MBUZZ-Esports-Logo.svg" alt="Logo MBUZZ Esports" />
            <nav className="nav-desktop">
                <span>About</span>
                <span>VR Experience EVA</span>
                <span>100% Gaming Marketplace</span>
                <span>Events</span>
                <span>Services</span>
            </nav>
            <div className="btn btn-dark">
                <a href="#joinUs" >Join us</a>
            </div>
            
        </header>
    )
}
export default Header;