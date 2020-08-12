import React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
      <ol>
        {data.github.viewer.repositories.edges.map(edge => {
          return <li>{edge.node.name}</li>
        })}
      </ol>
    </div>
  )
}

export default GithubBlock
