import React from 'react'
import starIcon from '../../assets/images/star-icon.png'
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
{
    strapiOurhistory {
        subTitle
        title
        historyList {
            id
            longText
            month
            title
            year
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

const OurHistory = () => {

    const data = useStaticQuery(query)
    const {strapiOurhistory: {
        subTitle, title, historyList
    }} = data 

    return (
        <section className="history-area ptb-100 bg-fafafb">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">
                        <img src={starIcon} alt="banner" /> 
                        {subTitle}
                    </span>
                    <h2>{title}</h2>
                </div>

                <ol className="timeline history-timeline">
                    {historyList.map(list => (
                        <li className="timeline-block" key={list.id}>
                            <div className="timeline-date">
                                <span>{list.year}</span>
                                {list.month}
                            </div>

                            <div className="timeline-icon">
                                <span className="dot-badge"></span>
                            </div>

                            <div className="timeline-content">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 col-md-12">
                                        <div className="content">
                                            <h3>{list.title}</h3>
                                            <p>{list.longText}</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-12">
                                        <div className="image"> 
                                            <img src={list.image.childImageSharp.fluid.src} alt="feature" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}

export default OurHistory