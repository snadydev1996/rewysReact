import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import starIcon from '../../assets/images/star-icon.png'
import shape from '../../assets/images/shape/shape1.svg'

const query = graphql`
{
    strapiTestimonials {
        subTitle
        title
        shortText
        item {
            id
            name
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            feedbackText
            designation
        }
    }
}
` 

const TestimonialsStyleTwo = () => {

    const data = useStaticQuery(query)
    const {strapiTestimonials: {
        subTitle, title, shortText, item
    }} = data 

    return (
        <div className="testimonials-area pt-100 pb-70 bg-fafafb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="testimonial" /> 
                        {subTitle}
                    </span>
                    <h2>{title}</h2>
                    <p>{shortText}</p>
                </div>

                <div className="row">
                    {item.map(list => (
                        <div className="col-lg-6 col-md-6" key={list.id}>
                            <div className="single-testimonials-box">
                                <img 
                                    src={list.image.childImageSharp.fluid.src} 
                                    className="shadow-sm"
                                    alt="Client Image" 
                                />
                                <p>{list.feedbackText}</p>
                                <div className="client-info">
                                    <h3>{list.name}</h3>
                                    <span>{list.designation}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="shape-img1">
                <img src={shape} alt="about" />
            </div>
        </div>
    )
}

export default TestimonialsStyleTwo