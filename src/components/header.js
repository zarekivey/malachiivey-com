import React, { Component } from 'react'
import { Link } from 'gatsby'

import headerStyles from '../styles/header.module.scss'

import NavButton from '../components/navButton'
import NavMenu from '../components/navMenu'

class Header extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
          visible: false
        };
    
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
      }
    
      toggleMenu() {
        this.setState({
          visible: !this.state.visible
        });
      }
    
      handleMouseDown(e) {
        this.toggleMenu();
      }
    
      render() {
      return (
        <div className="navigation-bar-container">
          <NavMenu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} />
          <Link className={headerStyles.title}to="/">M</Link>
          <NavButton handleMouseDown={this.handleMouseDown} />
          <div id="theMenu"></div>
        </div>
      );
    }
}

export default Header;