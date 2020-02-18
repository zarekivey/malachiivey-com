import React from 'react'

import Layout from '../components/layout'
import blogStyles from '../styles/blog.module.scss'

const BlogPage = () => {
    return (
        <Layout>
            <div className="index-container">
                <h1 className={blogStyles.title}>Blog coming soon...</h1>
            </div>
        </Layout>
    )
}

export default BlogPage;