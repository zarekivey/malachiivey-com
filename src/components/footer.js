import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div>
                <a href="https://www.linkedin.com/in/malachiivey/"><FontAwesomeIcon icon = { faLinkedin }></FontAwesomeIcon></a>
                <a href="https://www.linkedin.com/in/malachiivey/"><FontAwesomeIcon icon = { faGithub }></FontAwesomeIcon></a>
                <a href="https://www.linkedin.com/in/malachiivey/"><FontAwesomeIcon icon = { faEnvelopeSquare }></FontAwesomeIcon></a>
            </div>
            <p>Created by Malachi Ivey</p>
        </footer>
    )
}

export default Footer;