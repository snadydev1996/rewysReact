import React from 'react'
import starIcon from '../../assets/images/star-icon.png'
import { graphql, useStaticQuery } from "gatsby"
 
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

const TestimonialsStyleOne = () => {

    const data = useStaticQuery(query)
    const {strapiTestimonials: {
        subTitle, title, shortText, item
    }} = data 
    
    return (
        <div className="testimonials-area pt-100 pb-70 bg-f1f8fb">
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
                            <div className="single-testimonials-item">
                                <p>{list.feedbackText}</p>
                                <div className="client-info">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img 
                                            src={list.image.childImageSharp.fluid.src} 
                                            alt="Client Image" 
                                        />
                                        <div className="title">
                                            <h3>{list.name}</h3>
                                            <span>{list.designation}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TestimonialsStyleOne