import React from 'react'
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import CaseStudiesSidebar from '../components/CaseStudiesDetails/CaseStudiesSidebar'
 
const Details = ({ data }) => {
    const { title, content } = data.project
    return (
        <Layout>
            <Navbar />

            <PageBanner
                pageTitle={title}
                homePageText="Home" 
                homePageUrl="/" 
                activePageText={title}
            />

            <section className="case-studies-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="case-studies-details-desc">
                                <ReactMarkdown source={content} />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <CaseStudiesSidebar />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </Layout>
    );
}

export const query = graphql`
    query GetSingleProjects($slug: String) {
        project: strapiProjects(slug: { eq: $slug }) {
            title
            content
        }
    }
`

export default Details