import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
{
    strapiPartner {
        partner {
            id
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
}
` 

const Partner = () => {

    const data = useStaticQuery(query)
    const {strapiPartner: {
        partner
    }} = data 

    return (
        <div className="partner-area pt-100 pb-70 bg-f1f8fb">
            <div className="container">
                <div className="row align-items-center">
                    {partner.map(item => (
                        <div className="col-lg-2 col-6 col-sm-4 col-md-4" key={item.id}>
                            <div className="single-partner-item">
                                <img 
                                    src={item.image.childImageSharp.fluid.src} 
                                    alt="Partner Image" 
                                />
                            </div>
                        </div> 
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Partner