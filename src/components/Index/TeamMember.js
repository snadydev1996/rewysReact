import React from 'react'
import {Link} from 'gatsby'
import { graphql, useStaticQuery } from "gatsby"
import starIcon from '../../assets/images/star-icon.png'

const query = graphql`
{
    strapiTeamStyle1 {
        subTitle
        title
        shortText
        teamCard {
            id
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            name
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

const TeamMember = () => {

    const data = useStaticQuery(query)
    const {strapiTeamStyle1: {
        subTitle, title, shortText, teamCard, socialLinks
    }} = data 
    
    return (
        <section className="scientist-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="team" /> 
                        {subTitle}
                    </span>
                    <h2>{title}</h2>
                    <p>{shortText}</p>
                </div>

                <div className="row">
                    {teamCard.map(card => {
                        const {socialLinks} = card
                        return (
                            <div className="col-lg-3 col-sm-6" key={card.id}>
                                <div className="single-scientist-item-box">
                                    <div className="image">
                                        <img 
                                            src={card.image.childImageSharp.fluid.src} 
                                            alt="Team Image" 
                                        />
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
                                    <div className="content">
                                        <h3>{card.name}</h3>
                                        <span>{card.designation}</span>
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

export default TeamMember;