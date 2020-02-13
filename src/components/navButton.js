import React, {Component} from 'react';

import navButtonStyles from '../styles/navButton.module.scss'

class navButton extends Component {
    render() {
        return (
            <button className={navButtonStyles.button} onMouseDown={this.props.handleMouseDown}>+</button>
        )
    }
}

export default navButton;