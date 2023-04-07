import React from 'react'
import {Link} from 'gatsby'

import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
    {
        allStrapiProjects {
            nodes {
                slug
                subTitle
                title
                content
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

const TwoColumns = () => {

    const data = useStaticQuery(query)
    const {
        allStrapiProjects: { nodes: projects },
    } = data
    
    return (
        <section className="projects-area pt-100 pb-70">
            <div className="container">
                <div className="row justify-content-center">
                    {
                        projects.map((project, idx) => {
                            return(
                                <div className="col-lg-6 col-md-6" key={idx}>
                                    <div className="single-projects-box">
                                        <div className="image">
                                            <img 
                                                src={project.image.childImageSharp.fluid.src} 
                                                alt="Project Image" 
                                            />
                                            <Link className="link-btn" to={`/projects/${project.slug}`}>
                                                <i className='bx bx-plus'></i>
                                            </Link>
                                        </div>
                                        <div className="content">
                                            <h3>
                                                <Link to={`/projects/${project.slug}`}>
                                                    {project.title}
                                                </Link>
                                            </h3>
                                            <span>{project.subTitle}</span>
                                        </div>
                                    </div>
                                </div>
                           )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default TwoColumns;