import React, { Component } from 'react';
import { Link } from 'gatsby'
import '../styles/components/menu.css'

class navMenu extends Component {
    render() {
        let visibility = "hide";
    
        if (this.props.menuVisibility) {
            visibility = "show";
        }
    
        return (
            <div id="flyoutMenu" className={visibility}>
                <button className="closeNav" onMouseDown={this.props.handleMouseDown}>-</button>
                <div className="box">
                <ul>
                    <li className="nav-link"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-link"><Link className="nav-link" to="/about">About</Link></li>
                    <li className="nav-link"><Link className="nav-link" to="/blog">Blog</Link></li>
                    <Link to="/links"></Link>
                </ul>
                </div>
            </div>
        );
      }
}

export default navMenu;