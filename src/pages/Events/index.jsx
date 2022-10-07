import React from "react";
import "./Events.scss"

const Events = () => {

    return(
        <div className="container__pageEvents">
            <section className="container container__events">
                <h1><em>Tournaments and</em> Events</h1>
                <p>Mbuzz Esports will run all over the year among the most popular event in the planet, a series of tournaments with the most popular game of the moment.</p>
            </section>
            <section className="container container__gitex">
                <div className="container__gitex-header">
                    <h2>Gitex 2022</h2>
                    <p>Join us at GITEX 2022 in DUBAI and register to play vs the best esports player at Taken 7 in the world, to take the challenge vs Madi NAZ in League of Legend or beats our best FIFA player.</p>
                    <div className="container__gitex-register" >
                        <p>To register and visit Gitex 2022, click here:</p>
                        <div className="container__gitex-register-btn">
                            <a href="https://visit.gitex.com/" rel="noopener noreferrer" target={"_blank"}>Register for Gitex!</a>
                        </div> 
                    </div>
                </div>    
                <iframe width="560" height="315" src="https://www.youtube.com/embed/zg226z81bqU" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div className="container__gitex-register">
                    <p className="btn-call">To register and visit Gitex 2022, click here:</p>
                    <div className="container__gitex-register-btn">
                        <a href="https://visit.gitex.com/" rel="noopener noreferrer" target={"_blank"}>Register for Gitex!</a>
                    </div>
                </div>
            </section>
            {/* <section className="container container__fifa">
                <div className="container__fifa-header">
                    <h2>Fifa World Cup <br /><strong>2022</strong></h2>
                    <p>Mbuzz Esports is organising one of the most exciting events during the FIFA World Cup in Qatar.</p>
                    <p>We have combined the most download mobile game in the world, during the biggest event on the planet in the most biggest mall of Qatar. The “Mbuzz World Cup” the 29th of November 2022. You are all welcome to participate in FreeFire’s unique format tournament during the World Cup.</p>
                    <p><strong>Stay tuned for more info very soon.</strong></p>
                </div>
                <img src="/assets/fifa.png" alt="Logo Fifa" />
            </section> */}

<section className="container container__fifa">
                <div className="container__fifa-header">
                    <h2>Riyadh Season</h2>
                    <p>Mbuzz Esports is organizing one of the most exciting events during the Ryadh Season 2022. We have combined the most download mobile game in the world, during the biggest gaming event on the planet in Riyadh. The “Mbuzz World Cup” in December 2022. You are all welcome to participate in FreeFire’s unique format tournament. Stay tuned! more info very soon.</p>
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/57u56o7AWp4" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </section>

            
            <section className=" container container__tournament">
                <div className="container__tournament-header">
                    <h2>Online tournament</h2>
                    <p>Every week we organise an online tournament in partnership with most of the biggest brands in Saudi. This will allow the region’s gaming community to participate and enrich their existing tournaments.</p>
                </div>
                <img src="/assets/img-gaming.png" alt="Images of VR Headset and controller" />
            </section>
        </div>
    )
}

export default Events;