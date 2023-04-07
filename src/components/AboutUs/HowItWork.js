import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import starIcon from '../../assets/images/star-icon.png'
import shape from '../../assets/images/shape/circle-shape1.png'

const query = graphql`
{
    strapiHowItWork {
        subTitle
        title
        shortText
        process {
            id
            number
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            shortText
            title
        }
    }
}
`

const HowItWork = () => {

    const data = useStaticQuery(query)
    const {strapiHowItWork: {
        subTitle, title, shortText, process
    }} = data 

    return (
        <section className="process-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="Star Icon" /> 
                        {subTitle}
                    </span>
                    <h2>{title}</h2>
                    <p>{shortText}</p>
                </div>

                <div className="row">
                    {process.map(list => (
                        <div className="col-lg-4 col-md-6" key={list.id}>
                            <div className="single-process-box">
                                <div className="number">
                                    {list.number}
                                </div>
                                <div className="image">
                                    <img 
                                        src={list.image.childImageSharp.fluid.src} 
                                        alt="Process Image" 
                                    />
                                </div>
                                <h3>{list.title}</h3>
                                <p>{list.shortText}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="circle-shape1">
                <img src={shape} alt="about" />
            </div>
        </section>
    )
}

export default HowItWork