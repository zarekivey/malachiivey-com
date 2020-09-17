import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"

import footerStyles from "../styles/components/footer.module.scss"

const Footer = () => {
  return (
    <footer>
      <div className={footerStyles.contactInfo}>
        <a href="https://www.linkedin.com/in/malachiivey/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faLinkedin}
            className={footerStyles.icons}
          ></FontAwesomeIcon>
        </a>
        <a href="https://github.com/zarekivey" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            className={footerStyles.icons}
          ></FontAwesomeIcon>
        </a>
        <a href="mailto:iveyweb@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelopeSquare}
            className={footerStyles.icons}
          ></FontAwesomeIcon>
        </a>
      </div>
      <p className={footerStyles.createdBy}>Created by Malachi Ivey</p>
    </footer>
  )
}

export default Footer
