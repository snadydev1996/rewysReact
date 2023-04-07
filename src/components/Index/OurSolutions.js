import React from 'react'
import {Link} from 'gatsby'
import starIcon from '../../assets/images/star-icon.png'
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    strapiSolution {
        simpleText
        headerText
        helpText
    }
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

const OurSolutions = () => {
    const data = useStaticQuery(query)
    
    const {
        strapiSolution: {simpleText, headerText, helpText},
        allStrapiServiceSolution: {nodes: solutions}
    } = data

    return (
        <section className="solutions-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="star" /> 
                        {simpleText}
                    </span>
                    <h2>{headerText}</h2>
                    <p>{helpText}</p>
                </div>

                <div className="row">
                    {solutions.slice(0,3).map((solution, idx) => (
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

export default OurSolutions;