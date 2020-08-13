import React from "react"

import GithubCard from "./githubCard"
import githubBlockStyles from "../styles/githubblock.module.scss"

const GithubBlock = () => {
  return (
    <div className="index-container">
      <h1 className={githubBlockStyles.title}>What am I working on?</h1>
      <h2 className={githubBlockStyles.info}>
        Checkout some of my github repositories.
      </h2>
      <GithubCard />
    </div>
  )
}

export default GithubBlock
