import React from 'react'
import { Link } from 'gatsby'

import headerStyles from '../styles/header.module.scss'

import NavButton from '../components/navButton'
import NavMenu from '../components/navMenu'

const Header = () => {
    return (
        <header className={headerStyles.header}>
            <h1>
                <Link to="/" className={headerStyles.title}>M</Link>
            </h1>
            <NavMenu />
            <NavButton />
        </header>
    )
}

export default Header;