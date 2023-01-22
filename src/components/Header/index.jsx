import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.scss'

/**
 * Header
 * @returns {JSX} React Component
 */
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    function toggleBtn(){
        let navIcon = document.querySelector('.nav-icon');
        navIcon.classList.toggle('open')
        if (navIcon.classList.contains('open')) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }
    
    return(
        <header>
            <div className="nav-icon" onClick={toggleBtn}>
            <span></span>
            <span></span>
            <span></span>
        </div>
            <img src="/assets/MBUZZ-Esports-Logo.svg" alt="Logo MBUZZ Esports" />
            <nav className="nav-desktop">
                <Link to={'/'}>Home</Link>
                <Link to={'/vr-experience-eva'}>VR Experience EVA</Link>
                <Link to={'/marketplace'}>100% Gaming Marketplace</Link>
                <Link to={'/events'}>Events</Link>
                <Link to={'/services'}>Services</Link>
            </nav>
            <div className="btn btn-dark btn-dark-joinUs">
                <Link to={'/contact'}>Join us</Link>
            </div>
            {isOpen && (
                <section className="section__burgerNav">
                    <nav>
                        <Link onClick={toggleBtn} to={'/'}>
                            <span>Home</span><img src="/assets/chevron-right-solid.svg" alt="Chevron right" />
                        </Link>
                        <Link onClick={toggleBtn} to={'/vr-experience-eva'} >
                            <span>VR Experience EVA</span><img src="/assets/chevron-right-solid.svg" alt="Chevron right" />
                        </Link>
                        <Link onClick={toggleBtn} to={"/marketplace"} >
                            <span>100% Gaming Marketplace</span><img src="/assets/chevron-right-solid.svg" alt="Chevron right" />
                        </Link>
                        <Link onClick={toggleBtn} to={'/events'}>
                            <span>Events</span><img src="/assets/chevron-right-solid.svg" alt="Chevron right" />
                        </Link>
                        <Link onClick={toggleBtn} to={"/services"}>
                            <span>Services</span><img src="/assets/chevron-right-solid.svg" alt="Chevron right" />
                        </Link>
                        <Link onClick={toggleBtn} to={"/contact"}>
                            <span>Contact</span><img src="/assets/chevron-right-solid.svg" alt="Chevron right" />
                        </Link>
                    </nav>
            </section>
            )}
        </header>
    )
}
export default Header;