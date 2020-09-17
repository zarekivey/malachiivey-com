import React, { Component } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";

import headerStyles from "../styles/components/header.module.scss"

class Header extends Component {

  render() {
    return (
      <div className="navigation-bar-container">
        <ul>
          <li><AniLink className={headerStyles.logoLink} swipe to="/" duration={.5} entryOffset={100}>
          home</AniLink></li>
          <li><AniLink className={headerStyles.blogLink} swipe direction="left" to="/blog" duration={.5} entryOffset={100}>blog</AniLink></li>
        </ul>
        <div id="theMenu"></div>
      </div>
    )
  }
}

export default Header
