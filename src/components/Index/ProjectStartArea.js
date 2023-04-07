import React from 'react'
import {Link} from 'gatsby'
import { graphql, useStaticQuery } from "gatsby"
import shape from '../../assets/images/shape/circle-shape1.png'

const query = graphql`
{
    strapiStartYourProject {
        images {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        title
        shortText
        btnText
        btnLink
    }
}
` 

const ProjectStartArea = () => {
    const data = useStaticQuery(query)
    const {strapiStartYourProject: {
        images, title, shortText, btnText, btnLink
    }} = data 

    return (
        <div className="project-start-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-image">
                            <img 
                                src={images.childImageSharp.fluid.src} 
                                alt="project" 
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="project-start-content">
                            <h2>{title}</h2>
                            <p>{shortText}</p>
                            
                            <Link to={btnLink} className="default-btn">
                                <i className="flaticon-web"></i> 
                                {btnText}
                                <span></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="circle-shape1">
                <img src={shape} alt="project" />
            </div>
        </div>
    )
}

export default ProjectStartArea;