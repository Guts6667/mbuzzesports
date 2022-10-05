import React, { useEffect, useState } from "react";
import './OurTeam.scss'

const OurTeam = () => {
    const [teamDatas, setTeamDatas] = useState(undefined)
useEffect(() => {
fetch("/data/ourTeam.json")
.then((res) => res.json())
.then((res) => setTeamDatas(res));
}, [])
if(teamDatas){
    console.log(teamDatas);
}
    return(
        <section className="container__ourTeam container">
            <h2>Our Team & Leaders</h2>
            <p>Our international team and leaders are a perfect combination of business, engineers, and gamers experts having in common the passion of esports and competition.</p>
            <div className="container__ourTeam-cards">
                {teamDatas && (
                    teamDatas.map((data) => {
                        return(
                            <article key={data.lastName} className="cardTeam">
                                <img src={`/assets/${data.picture}`} alt={`${data.firstName} ${data.name}`} />
                                <div className="cardTeam-legend">
                                    <h3>{data.role}</h3>
                                    <span>{`${data.firstName} ${data.lastName}`}</span>
                                    <span>{data.country}</span>
                                </div>
                            </article>
                        )
                    })
                )}
                
            </div>
        </section>
    )
}

export default OurTeam;