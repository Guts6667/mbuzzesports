import React from "react";
import "./Services.scss"

/**
 * Services Page
 * @returns {JSX} React Component
 */
const Services = () => {
    return(
        <section className="container container__services">
            <h1>Games <strong>servers</strong> services</h1>
            <p>Mbuzz has proven records and successful business cases in the domain of Servers and Data Centres. As the gaming industry in KSA is scheduled to growth it becomes natural to partner with the top games servers providers to focus on the high demand in the region.</p>
            <video controls poster="/assets/bg-events.svg" >
                <source src="/assets/video-services.mp4"  type="video/mp4"/>
            </video>
            <p>Mbuzz is now on the go-to host and offers world-class and innovative solutions for publishers and game studios.</p>
        </section>
    )
}
export default Services;