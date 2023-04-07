import React from 'react'
import {Link} from 'gatsby'
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allStrapiServiceSolution {
        nodes {
            icon
            title
            shortText
            slug
        }
    }
  }
`

const ServicesOne = () => {
    const data = useStaticQuery(query)
    
    const {
        allStrapiServiceSolution: {nodes: solutions}
    } = data

    return (
        <section className="solutions-area pt-100 pb-70">
            <div className="container">
                <div className="row">
                    {solutions.map((solution, idx) => (
                        <div className="col-lg-4 col-sm-6" key={idx}>
                            <div className="single-solutions-box">
                                <div className="icon">
                                    <i className={solution.icon}></i>
                                </div>
                                <h3>
                                    <Link to={`/solution/${solution.slug}`}>
                                        {solution.title}
                                    </Link>
                                </h3>
                                <p>{solution.shortText}</p>
                                <Link to={`/solution/${solution.slug}`} className="view-details-btn">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesOne;