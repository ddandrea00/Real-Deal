import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavItem extends Component {
    render() {
        return (
                <li> <Link to={this.props.href}> {this.props.title} </Link> </li>
        );
    }
}

export default NavItem;