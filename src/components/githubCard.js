import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const GithubCard = () => {
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
      <ol>
        {data.github.viewer.repositories.edges.map(edge => {
          return (
            <li>
              <h1>{edge.node.name}</h1>
              <p>{edge.node.description}</p>
              <p>{edge.node.stargazers.totalcount}</p>
              <p>
                {edge.node.primaryLanguage && edge.node.primaryLanguage.name}
              </p>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default GithubCard
