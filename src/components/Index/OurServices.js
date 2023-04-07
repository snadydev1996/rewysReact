import React from 'react'
import starIcon from '../../assets/images/star-icon.png'
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    strapiServicesOne {
        simpleText
        header
        helpText
        image {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
        services {
          id
          icon
          services
        }
    }
    strapiServicesTwo {
        simpleText
        header
        helpText
        image {
            childImageSharp {
              fluid {
                  ...GatsbyImageSharpFluid
              }
            }
        }
        services {
          id
          icon
          services
        }
    }
  }
`

const OurServices = () => {
    const data = useStaticQuery(query)
    const {
        strapiServicesOne, strapiServicesTwo
    } = data
    // console.log(services)
    return (
        <React.Fragment>
            {/* Service Left Image Style */}
            <div className="about-area pb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-img">
                                <Image fluid={strapiServicesOne.image.childImageSharp.fluid} />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <div className="content">
                                    <span className="sub-title">
                                        <img src={starIcon} alt="icon" /> {strapiServicesOne.simpleText}
                                    </span>
                                    
                                    <h2>{strapiServicesOne.header}</h2>
                                    <p>{strapiServicesOne.helpText}</p>
                                    <ul className="about-list mb-0">
                                        {strapiServicesOne.services.map(service => (
                                            <li key={service.id}>
                                                <i className={service.icon}></i>
                                                {service.services}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Service Left Image Style */}

            {/* Service Right Image Style */}
            <div className="our-mission-area pb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="our-mission-content">
                                <div className="content">
                                    <span className="sub-title">
                                        <img src={starIcon} alt="icon" /> {strapiServicesTwo.simpleText}
                                    </span>
                                    
                                    <h2>{strapiServicesTwo.header}</h2>
                                    <p>{strapiServicesTwo.helpText}</p>

                                    <ul className="our-mission-list mb-0">
                                        {strapiServicesTwo.services.map(service => (
                                            <li key={service.id}>
                                                <i className={service.icon}></i>
                                                {service.services}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="our-mission-image">
                                <Image fluid={strapiServicesTwo.image.childImageSharp.fluid} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Service Right Image Style */}
        </React.Fragment>
    )
}

export default OurServices;