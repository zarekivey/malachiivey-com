import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import githubCardStyles from "../styles/components/githubcard.module.scss"
import { ExternalLink } from "react-external-link"

const GithubCard = () => {
  const data = useStaticQuery(graphql`
    query {
      github {
        viewer {
          repositories(
            first: 2
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
    <div className={githubCardStyles.repositories}>
      <ul>
        {data.github.viewer.repositories.edges.map(edge => {
          return (
            <li>
              <ExternalLink
                href={edge.node.url}
                className={githubCardStyles.repositories}
              >
                <h1>{edge.node.name}</h1>
                <p>
                  {edge.node.primaryLanguage && edge.node.primaryLanguage.name}
                </p>
              </ExternalLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default GithubCard
