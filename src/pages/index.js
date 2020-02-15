import React from "react"

import Layout from '../components/layout'
import indexStyles from '../styles/landing.module.scss'

const IndexPage = () => {
    return (
        <Layout>
            <div className="index-container">
                <h1 className={indexStyles.hello}>Hi, I'm Malachi Ivey.</h1>
                <h2 className={indexStyles.info}>I'm currently a Software Developer in Atlanta. When I'm not coding I'm exploring the city and  discovering new technolgies.</h2>
            </div> 
        </Layout>
    )
}

export default IndexPage;