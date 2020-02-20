import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby' 

import Layout from '../components/layout'
import blogStyles from '../styles/blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (
            sort: {
            fields: publishedDate,
            order: DESC
            }
        ) {
            edges {
            node {
                title
                slug
                publishedDate(formatString: "MMMM Do, YYYY")
            }
            }
        }
        }
    `)
    return (
        <Layout>
            <div className="index-container">
                <h1 className={blogStyles.title}>Welcome to my blog!</h1>
                <ol>
                    {data.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <li>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <h2>{edge.node.title}</h2>
                                    <p>{edge.node.publishedDate}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
            </div>
        </Layout>
    )
}

export default BlogPage;