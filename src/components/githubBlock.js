import React from "react"

import GithubCard from "./githubCard"
import githubBlockStyles from "../styles/components/githubblock.module.scss"

const GithubBlock = () => {
  return (
    <div className="index-container">
      <h1 className={githubBlockStyles.title}>What am I working on?</h1>
      <h2 className={githubBlockStyles.info}>
        I'm currentlly contribuing to local companies through freelance work, as
        well as contributing to open-source software. Want to work with me on a
        project? Get in touch! *insert link to contact block* Also, check out
        some of my github repositories:
      </h2>
      <GithubCard />
    </div>
  )
}

export default GithubBlock
