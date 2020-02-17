import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

import footerStyles from '../styles/footer.module.scss'

const Footer = () => {
    return (
        <footer>
            <div className = {footerStyles.contactInfo}>
                <a href="https://www.linkedin.com/in/malachiivey/" target="_blank"><FontAwesomeIcon icon = { faLinkedin } className = { footerStyles.icons }></FontAwesomeIcon></a>
                <a href="https://github.com/zarekivey" target="_blank"><FontAwesomeIcon icon = { faGithub } className = { footerStyles.icons }></FontAwesomeIcon></a>
                <a href="mailto:iveyweb@gmail.com" target="_blank"><FontAwesomeIcon icon = { faEnvelopeSquare } className = { footerStyles.icons }></FontAwesomeIcon></a>
            </div>
            <p className = { footerStyles.createdBy }>Created by Malachi Ivey</p>
        </footer>
    )
}

export default Footer;