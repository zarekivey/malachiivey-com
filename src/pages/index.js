import React from "react"

import Layout from "../components/layout"
import GithubBlock from "../components/githubBlock"
import Contact from "../components/contact"
import indexStyles from "../styles/pages/landing.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <div className="index-container">
        <h1 className={indexStyles.hello}>About Malachi Ivey.</h1>
        <h2 className={indexStyles.info}>
          I am a Software Developer based in Atlanta, GA. 
          <br />
          <br />
          You can find my resume on <a className={indexStyles.links}href="https://www.linkedin.com/in/malachiivey/" target="_blank" rel="noopener noreferrer">Linkedin</a>
        </h2>
      </div>
      <GithubBlock />
      <div>
        <h1 className={indexStyles.hello}>About this website.</h1>
        <h2 className={indexStyles.info}>I created this site as an upgrade from my previous portfolio. Though the simplicity of pure HTML, CSS, and JavaScript was satisfying to build with, I wanted to simplify the addition of more complex features like API Integrations and a blog. I chose to make this website with GatsbyJS as it has the ability to preload content, and everything you need is built in to the framework. This makes the site easy to scale without skimping on speed. Beyond the technology used, I use this site as a way to document my tech journey and as a way to connect with other developers and possible employers. Want to learn more about how I made this website? I wrote a blog post where I take a deep dive into the process: the technologies, steps, and best practices I used to create it *here*. </h2>
      </div>
      <Contact />
    </Layout>
  )
}

export default IndexPage
