import React from "react";
import { Link } from "react-router-dom";
// import About from "../../components/About";
import HeroHome from "../../components/HeroHome";
import OurAmbition from "../../components/OurAmbition";
import OurCompany from "../../components/OurCompany";
import OurTeam from "../../components/OurTeam";
import "./Home.scss"

const Home = () => {



    return(
        <div >
            <HeroHome />
                <OurCompany />
                <OurAmbition />
                <OurTeam />
                <section className="container container__ourRoadmap ">
                    <h2>Our Roadmap</h2>
                    <img src="/assets/Roadmap.svg" alt="Roadmap MBUZZ Esports" />
                </section>
                <section className="container container__joinUs">
                    <h2>Join Us</h2>
                    <span>Let's build something awesome together!</span>
                    <Link to={'/contact'}>Contact us</Link>
                    <img src="/assets/bg5.png" alt="" />
                </section>
        </div>
        
    )
}


export default Home;