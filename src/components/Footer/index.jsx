import React from "react";
import "./Footer.scss"

/**
 * Footer
 * @returns {JSX} React Component
 */
const Footer = () => {

    return(
        <footer className="container">
            <div className="container__footer-socials">
                <a href="https://www.linkedin.com/company/mbuzztech/" rel="noopener noreferrer" target={"_blank"}>
                    <img src="/assets/icon-linkedin.svg" alt="icon tiktok" />
                </a>
                <a href="https://www.instagram.com/mbuzztech/" rel="noopener noreferrer" target={"_blank"}>
                    <img src="/assets/icon-instagram.svg" alt="icon instagram" />
                </a>
                <a href="https://twitter.com/mbuzztech" rel="noopener noreferrer" target={"_blank"}>
                    <img src="/assets/icon-twitter.svg" alt="icon twitter" />
                </a>
                <a href="https://www.facebook.com/MBUZZTech/" rel="noopener noreferrer" target={"_blank"}>
                    <img src="/assets/icon-facebook.svg" alt="icon facebook" />
                </a>
            </div>
            <div className="container__footer-socialsXl">
                <a href="https://www.mbuzztech.com" rel="noopener noreferrer" target={"_blank"}>
                    <img src="/assets/Mbuzz-Logo.svg" alt="Logo Mbuzz" className="iconPartner" />
                </a>
                <a href="https://www.opera.com" rel="noopener noreferrer" target={"_blank"}>
                    <img src="/assets/Logo-Opera.svg" alt="Logo Opera" className="iconPartner"/>
                </a>
                <a href="https://www.opera.com/fr/crypto/next" rel="noopener noreferrer" target={"_blank"}>
                    <img src="/assets/Logo-OperaCrypto.svg" alt="Logo Opera Crypt" className="iconPartner"/>
                </a>
                <a href="https://www.linkedin.com/company/mbuzztech/" rel="noopener noreferrer" target={"_blank"}>
                    <img src="/assets/icon-linkedin.svg" alt="icon linkedin" className="iconSocial"/>
                </a>
                <a href="https://www.instagram.com/mbuzztech/" rel="noopener noreferrer" target={"_blank"}>
                    <img src="/assets/icon-instagram.svg" alt="icon instagram" className="iconSocial"/>
                </a>
                <a href="https://twitter.com/mbuzztech" rel="noopener noreferrer" target={"_blank"}>
                    <img src="/assets/icon-twitter.svg" alt="icon twitter" className="iconSocial" />
                </a>
                <a href="https://www.facebook.com/MBUZZTech/" rel="noopener noreferrer" target={"_blank"}>
                    <img src="/assets/icon-facebook.svg" alt="icon facebook" className="iconSocial" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;