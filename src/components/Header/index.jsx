import React, { useState } from "react";
import './Header.scss'


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
                <a href="#about">About</a>
                <a href="#eva">VR Experience EVA</a>
                <a href="#marketplace">100% Gaming Marketplace</a>
                <a href="#events">Events</a>
                <a href="#services">Services</a>
            </nav>
            <div className="btn btn-dark">
                <a href="#joinUs" >Join us</a>
            </div>
            {isOpen && (
                <section className="section__burgerNav">
                    <nav>
                        <a onClick={toggleBtn} href="#about"><span>About</span><img src="/assets/chevron-right-solid.svg" alt="Chevron right" /></a>
                        <a onClick={toggleBtn} href="#eva"><span>VR Experience EVA</span><img src="/assets/chevron-right-solid.svg" alt="Chevron right" /></a>
                        <a onClick={toggleBtn} href="#marketplace"><span>100% Gaming Marketplace</span><img src="/assets/chevron-right-solid.svg" alt="Chevron right" /></a>
                        <a onClick={toggleBtn} href="#events"><span>Events</span><img src="/assets/chevron-right-solid.svg" alt="Chevron right" /></a>
                        <a onClick={toggleBtn} href="#services"><span>Services</span><img src="/assets/chevron-right-solid.svg" alt="Chevron right" /></a>
                    </nav>
            </section>
            )}
        </header>
    )
}
export default Header;