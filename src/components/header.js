import React, { Component } from "react"
import { Link } from "gatsby"

import headerStyles from "../styles/components/header.module.scss"

class Header extends Component {

  render() {
    return (
      <div className="navigation-bar-container">
        <ul>
          <li><Link className={headerStyles.logoLink} to="/">
          home</Link></li>
          <li><Link className={headerStyles.blogLink} to="/blog">blog</Link></li>
        </ul>
        <div id="theMenu"></div>
      </div>
    )
  }
}

export default Header
