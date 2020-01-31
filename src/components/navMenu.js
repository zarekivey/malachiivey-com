import React, { Component } from 'react';
import { Link } from 'gatsby';

class NavMenu extends Component {
    redner() {
        let visibility = "hide";

        if(this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <div id="flyoutMenu" className={visibility}>
                <button classNMame="closeNav" onMouseDown={this.props.handlemouseDown}>-</button>
                <div className="box">
                    <ul>
                        <li className="nav-link"><Link className="nav-link" to="/">HOME</Link></li>
                        <li className="nav-link"><Link className="nav-link" to="/about">ABOUT</Link></li>
                        <li className="nav-link"><Link className="nav-link" to="/blog">BLOG</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavMenu;