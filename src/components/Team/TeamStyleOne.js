import React from 'react'
import {Link} from 'gatsby'
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
{
    strapiTeamStyle2 {
        teamCard {
            id
            name
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            designation
            socialLinks {
                id
                icon
                link
            }
        }
    }
}
` 

const TeamStyleOne = () => {

    const data = useStaticQuery(query)
    const {strapiTeamStyle2: {
        teamCard, socialLinks
    }} = data 

    return (
        <section className="scientist-area bg-color pt-100 pb-70">
            <div className="container">
                <div className="row">
                    {teamCard.map(card => {
                        const {socialLinks} = card
                        return (
                            <div className="col-lg-3 col-sm-6" key={card.id}>
                                <div className="single-scientist-box">
                                    <div className="image">
                                        <img 
                                            src={card.image.childImageSharp.fluid.src} 
                                            alt="Team Image" 
                                        />
                                    </div>
                                    <div className="content">
                                        <h3>{card.name}</h3>
                                        <span>{card.designation}</span>

                                        <ul className="social">
                                            {socialLinks && socialLinks.map(item => {
                                                return (
                                                    <li key={item.id}>
                                                        <Link to={item.link} className="d-block">
                                                            <i className={item.icon}></i>
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default TeamStyleOne