import React from "react";
import "./VRExperienceEVA.scss"

const VRExperienceEVA = () => {

    return(
        <div className="container">
            <section className="container__eva">
                <h1>Virtual Gaming <strong>Experience</strong> : EVA</h1>
                <p>The first VR Esports Arena in the World is now a part of Mbuzz Esports offer in Saudi and GCC permitting to Saudi and MENA players to enter the global world championship.</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/blIsKcLWF5w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <p>EVA is a unique and cutting-edge technology that was introduced to the world at Paris Games Week 2019 for the first time. EVA provides the <strong>ULTIMATE VR</strong> Esports experience.</p>
                <p>Equiped with the <strong>latest generation</strong> of VR Headsets, Machine guns, Stream reggie, and connected rifles with Unlimited mobility in an area up to 5000sqm large! This is what we call Free roaming In VR.</p>
                <h3>Every gamer has dreams at least once in a lifetime to be the hero of his favorite game, EVA makes these dreams a <strong>reality</strong>.</h3>
                <div className="container__eva-btn">
                    <a href="https://www.eva.gg/en" rel="noopener noreferrer" target={"_blank"}>Check out eva!</a>
                </div>
            </section>
        </div>
    )
}

export default VRExperienceEVA;