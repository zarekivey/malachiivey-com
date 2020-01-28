import React from 'react'
import { Link } from 'gatsby'

import headerStyles from '../styles/header.module.scss'

const Header = () => {
    return (
        <header>
            <h1>M</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/" className={headerStyles.link}>Home</Link>
                    </li>
                    <li>
                        <Link to="/blog" className={headerStyles.link}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/about" className={headerStyles.link}>About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;