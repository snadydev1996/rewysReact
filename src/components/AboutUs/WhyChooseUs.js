import React from 'react'
import starIcon from '../../assets/images/star-icon.png'
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
{
    strapiWhyChooseUs {
        title
        subTitle
        shortText
        whyChooseUs {
            title
            shortText
            number
            id
        }
        image {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
}
`

const WhyChooseUs = () => {

    const data = useStaticQuery(query)
    const {strapiWhyChooseUs: {
        subTitle, title, shortText, whyChooseUs, image
    }} = data 

    return (
        <section className="how-its-work-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-content">
                            <span className="sub-title">
                                <img src={starIcon} alt="banner" /> 
                                {subTitle}
                            </span>
                            <h2>{title}</h2>
                            <p>{shortText}</p>
                            <div className="inner-box">
                                {whyChooseUs.map(list => (
                                    <div className="single-item" key={list.id}>
                                        <div className="count-box">
                                            {list.number}
                                        </div>
                                        <h3>{list.title}</h3>
                                        <p>{list.shortText}</p>
                                    </div>
                               ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="how-its-work-image">
                            <img 
                                src={image.childImageSharp.fluid.src} 
                                alt="Why Choose Us" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs