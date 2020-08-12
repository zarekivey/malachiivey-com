import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const GithubBlock = () => {
  const data = useStaticQuery(graphql`
    query {
      github {
        viewer {
          repositories(first: 4, isFork: false, privacy: PUBLIC) {
            edges {
              node {
                id
                name
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
