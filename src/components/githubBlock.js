import React from "react"

import GithubCard from "./githubCard"
import githubBlockStyles from "../styles/githubblock.module.scss"

const GithubBlock = () => {
  return (
    <div className="index-container">
      <h1 className={githubBlockStyles.title}>Check out my Github projects!</h1>
      <GithubCard />
    </div>
  )
}

export default GithubBlock
