import React from 'react'
import { Link } from 'gatsby'
import Image from "gatsby-image"
import user1 from '../../assets/images/user1.jpg'

import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
    {
        allStrapiBlog(sort: {fields: date, order: DESC}) {
        nodes {
            title
            slug
            content
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            author
            date
        }
    }
}
`

const BlogCard = () => {
    const data = useStaticQuery(query)
    const {
        allStrapiBlog: { nodes: blogs },
    } = data

    return (
        <section className="blog-area ptb-100">
            <div className="container">
                <div className="row">
                    {
                        blogs.map((blog, idx) => {
                            return(
                                <div className="col-lg-4 col-md-6" key={idx}>
                                    <div className="single-blog-post bg-fffbf5">
                                        <div className="post-image">
                                            <Link to={`/blogs/${blog.slug}`}>
                                                <Image 
                                                    fluid={blog.image.childImageSharp.fluid} 
                                                />
                                            </Link>
                                        </div>

                                        <div className="post-content">
                                            <ul className="post-meta d-flex justify-content-between align-items-center">
                                                <li>
                                                    <div className="post-author d-flex align-items-center">
                                                        <img src={user1} className="rounded-circle" alt="blog" />
                                                        <span>{blog.author}</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <i className='flaticon-calendar'></i> {blog.date}
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link to={`/blogs/${blog.slug}`}>
                                                    {blog.title}
                                                </Link>
                                            </h3>
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

export default BlogCard