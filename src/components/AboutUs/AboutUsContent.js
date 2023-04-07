import React from 'react'
// import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import starIcon from '../../assets/images/star-icon.png'
import shape1 from '../../assets/images/shape/circle-shape1.png'

const query = graphql`
{
    strapiAboutpagesectionone {
        aboutImg {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        heading
        shortDesc
        optionlist {
            header
            iconImg {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            subheading
            id
        }
        goals {
            heading
            list {
                iconClass
                name
                id
            }
            shortDesc
            id
        }
    }
}
`

const AboutUsContent = () => {
    const data = useStaticQuery(query)
    const {strapiAboutpagesectionone: {
        aboutImg,
        heading,
        shortDesc,
        goals,
        optionlist,
    }} = data

    return (
        <section className="about-area ptb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img 
                                src={aboutImg.childImageSharp.fluid.src}
                                alt="feature" 
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="content">
                                <span className="sub-title">
                                    <img src={starIcon} alt="banner" /> 
                                    About Us
                                </span>
                                <h2>{heading}</h2>
                                <p>{shortDesc}</p>
                                <ul className="features-list">
                                    {optionlist.map(opt => {
                                        return(
                                            <li key={opt.id}>
                                                <img 
                                                    src={opt.iconImg.childImageSharp.fluid.src}
                                                    alt="feature" 
                                                />
                                                <h3>{opt.header}</h3>
                                                <p>{opt.subheading}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="circle-shape1">
                <img src={shape1} alt="banner" />
            </div>

            <div className="container">
                <div className="about-inner-area">
                    <div className="row">
                        {goals.map(goal => {
                            const {list} = goal
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={goal.id}>
                                    <div className="about-text">
                                        <h3>{goal.heading}</h3>
                                        <p>{goal.shortDesc}</p>
                                        
                                        <ul className="features-list">
                                            {list && list.map(lst => {
                                                return (
                                                    <li key={lst.id}>
                                                        <i className={lst.iconClass}></i> {lst.name}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="circle-shape1">
                <img src={shape1} alt="banner" />
            </div>
        </section>
    )
}

export default AboutUsContent;