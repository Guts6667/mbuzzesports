import React from "react";
import "./OurCompany.scss"

const OurCompany = () => {
    return(
        <section className="container__ourCompany container">
            
            <div className="container__ourCompany-blockRight">
            <h2>
                Our Company
            </h2>
                <p>Mbuzz Esports is part of Mbuzz Group, an established Saudi-based company in Industrial Communication & Technology (ICT). For more info please visit <a target={"blank"} href="https://www.mbuzztech.com/">www.mbuzztech.com</a>.</p>
            </div>
            <div className="container__ourCompany-blockLeft">
                <p>Mbuzz Esports is now leveraging all the know-how, network, and experience of its mother company to offer world-class innovative solutions and new experiences in the Gaming industry, both for local enterprises and the gamers community </p>
            </div>
            <img src="/assets/mbuzzesports-bg.png" alt="logo Mbuzz esports" />
        </section>
    )
}

export default OurCompany;