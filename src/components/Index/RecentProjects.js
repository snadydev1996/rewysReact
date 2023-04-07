import React from 'react'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'

import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
    {
        strapiRecentProjects {
            subTitle
            title
            shortText
        }
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

const RecentProjects = () => {

    const data = useStaticQuery(query)
    const {
        strapiRecentProjects: {subTitle, title, shortText},
        allStrapiProjects: { nodes: projects },
    } = data
    
    return (
        <section className="projects-area bg-color pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="project" /> {subTitle}
                    </span>
                    <h2>{title}</h2>
                    <p>{shortText}</p>
                </div>

                <div className="row justify-content-center">
                    {
                        projects.slice(0,6).map((project, idx) => {
                            return(
                                <div className="col-lg-4 col-md-6" key={idx}>
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

export default RecentProjects;