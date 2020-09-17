import React from "react"

import GithubCard from "./githubCard"
import githubBlockStyles from "../styles/components/githubblock.module.scss"

const GithubBlock = () => {
  return (
    <div className="index-container">
      <h1 className={githubBlockStyles.title}>What am I doing now?</h1>
      <h2 className={githubBlockStyles.info}>
        I'm currently contributing to local companies through freelance work, as
        well as actively looking for open source projects to contribute to. If you have anything that you think I'd be interested in contributing to then don't hesitate to reach out! Some of my own active projects include track-reading-habits, a minimal yet intuitive approach to organizing your books. As well as netlfix-pick (searching for a better name), netlfix-pick allows you to track what movies you've watched as well as view what titles are available and where! <br/> <br /> You can view the progress of my onogoing projects via their repositories linked below:
      </h2>
      <GithubCard />
    </div>
  )
}

export default GithubBlock
