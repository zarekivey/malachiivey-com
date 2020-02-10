import React from 'react';
import { Link } from 'gatsby'

import headerStyles from '../styles/header.module.scss'

const navMenu = () => {
    return (
        <nav>
            <ul className={headerStyles.navList}>
                <li>
                    <Link to="/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Home</Link>
                </li>
                <li>
                    <Link to="/blog" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Blog</Link>
                </li>
                <li>
                    <Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default navMenu;