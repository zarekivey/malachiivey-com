import React from "react"

import Layout from "../components/layout"
import GithubBlock from "../components/githubBlock"
import indexStyles from "../styles/landing.module.scss"
import { useStaticQuery } from "gatsby"

const IndexPage = () => {
  // const data = useStaticQuery(`graphql
  // query {
  //     github {
  //       viewer {
  //         repositories(
  //           first: 6
  //           isFork: false
  //           privacy: PUBLIC
  //           orderBy: { field: STARGAZERS, direction: DESC }
  //         ) {
  //           edges {
  //             node {
  //               id
  //               name
  //               url
  //               description
  //               forkCount
  //               stargazers {
  //                 totalCount
  //               }
  //               primaryLanguage {
  //                 name
  //                 color
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <Layout>
      <div className="index-container">
        <h1 className={indexStyles.hello}>Hi, I'm Malachi Ivey.</h1>
        <h2 className={indexStyles.info}>
          I'm currently a Software Developer in Atlanta. When I'm not coding I'm
          exploring the city and discovering new technolgies.
        </h2>
      </div>
      <GithubBlock />
    </Layout>
  )
}

export default IndexPage
