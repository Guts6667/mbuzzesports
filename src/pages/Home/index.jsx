import React from "react";
// import About from "../../components/About";
import HeroHome from "../../components/HeroHome";
import OurAmbition from "../../components/OurAmbition";
import OurCompany from "../../components/OurCompany";
import OurTeam from "../../components/OurTeam";
import "./Home.scss"

const Home = () => {



    return(
        <div>
            <HeroHome />
            {/* <About /> */}
            <section id="about">
                <OurCompany />
                <OurAmbition />
                <OurTeam />
                <section className="container container__ourRoadmap ">
                    <h2>Our Roadmap</h2>
                    <img src="/assets/Roadmap.JPG" alt="Roadmap MBUZZ Esports" />
                </section>
            </section>
            
        </div>
        
    )
}


export default Home;