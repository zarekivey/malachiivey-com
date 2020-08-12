import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import GithubCard from "./githubCard"

const GithubBlock = () => {
  const data = useStaticQuery(graphql`
    query {
      github {
        viewer {
          repositories(
            first: 4
            isFork: false
            privacy: PUBLIC
            orderBy: { field: STARGAZERS, direction: DESC }
          ) {
            edges {
              node {
                id
                name
                description
                url
                stargazers {
                  totalCount
                }
                primaryLanguage {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <h1>This is the github block.</h1>
      <GithubCard />
    </div>
  )
}

export default GithubBlock
