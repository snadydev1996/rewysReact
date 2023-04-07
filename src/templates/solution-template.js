import React from 'react'
import { graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Layout from "../components/App/Layout"
import Navbar from "../components/App/Navbar"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import ServiceSidebar from '../components/ServiceDetails/ServiceSidebar'
import RelatedServices from '../components/ServiceDetails/RelatedServices'
 
const Details = ({ data }) => {
    const { title, longText } = data.solution
    return (
        <Layout>
            <Navbar />

            <PageBanner
                pageTitle={title}
                homePageText="Home" 
                homePageUrl="/" 
                activePageText={title}
            />

            <section className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <ReactMarkdown source={longText} />
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <ServiceSidebar />
                        </div>
                    </div>
                </div>
            </section>

            <RelatedServices />

            <Footer />
        </Layout>
    );
}

export const query = graphql`
    query GetSingleServiceSolution($slug: String) {
        solution: strapiServiceSolution(slug: { eq: $slug }) {
            title
            longText
        }
    }
`

export default Details