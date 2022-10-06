import React from "react";
import "./Market.scss"

const Marketplace = () => {
    const datas = [
        {
            "title" : "Headset",
            "picture" : "headset.jpg"
        },
        {
            "title" : "Esport T-shirt",
            "picture" : "t-shirt.jpg"
        },
        {
            "title" : "Game chair",
            "picture" : "Chair.jpg"
        },
        {
            "title" : "Gamers PC",
            "picture" : "pc.jpg"
        },
        {
            "title" : "Gamer phone",
            "picture" : "phone.jpg"
        },
        {
            "title" : "Gamer hoodie",
            "picture" : "hoodie.jpg"
        },

    ]
    return(
        <div className="container">
            <section className="container__marketplace">
                <div className="container__marketplace-hero">
                <h1><strong>100% games</strong><br /><em>accessories marketplace</em></h1>
                <p>Having a deep footprint in IT distribution, Mbuzz Tech and Mbuzz Esports are now converting this know-how, network, and expertise to launch the first 100% Gaming Esports Market Place in the region.</p>
                <p>The platform will offer the most comprehensive offer in the market and allow weekly tournaments to play, win, and buy with massive discounts.</p>
                </div>
                
                <div className="container__marketplace-products">
                    {datas.map((data)=> {
                        return(
                            <article key={data.title}>
                                <img src={`/assets/${data.picture}`} alt={data.title} />
                                <h3>{data.title}</h3>
                            </article>
                        )
                    })}
                </div>
                

            </section>
        </div>
    )
}

export default Marketplace;