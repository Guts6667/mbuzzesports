import React from "react";
import "./Footer.scss"

const Footer = () => {

    return(
        <footer className="container">
            <div className="container__footer-socials">
                {/* <a href="">
                    <img src="/assets/icon-tiktok.svg" alt="icon tiktok" />
                </a> */}
                <a href="https://www.instagram.com/mbuzztech/">
                    <img src="/assets/icon-instagram.svg" alt="icon instagram" />
                </a>
                <a href="https://twitter.com/mbuzztech">
                    <img src="/assets/icon-twitter.svg" alt="icon twitter" />
                </a>
                <a href="https://www.facebook.com/MBUZZTech/">
                    <img src="/assets/icon-facebook.svg" alt="icon facebook" />
                </a>
            </div>
            <div className="container__footer-socialsXl">
                <a href="https://www.mbuzztech.com">
                    <img src="/assets/Mbuzz-Logo.svg" alt="Logo Mbuzz" className="iconPartner" />
                </a>
                <a href="https://www.opera.com">
                    <img src="/assets/Logo-Opera.svg" alt="Logo Opera" className="iconPartner"/>
                </a>
                <a href="https://www.opera.com/fr/crypto/next">
                    <img src="/assets/Logo-OperaCrypto.svg" alt="Logo Opera Crypt" className="iconPartner"/>
                </a>
                <a href="https://www.instagram.com/mbuzztech/">
                    <img src="/assets/icon-instagram.svg" alt="icon instagram" className="iconSocial"/>
                </a>
                <a href="https://twitter.com/mbuzztech">
                    <img src="/assets/icon-twitter.svg" alt="icon twitter" className="iconSocial" />
                </a>
                <a href="https://www.facebook.com/MBUZZTech/">
                    <img src="/assets/icon-facebook.svg" alt="icon facebook" className="iconSocial" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;