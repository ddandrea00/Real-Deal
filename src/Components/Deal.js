import React, { Component } from 'react';

class Deal extends Component {
    render() {
        return (
            <li className="Deal">
            {this.props.deal.address} - {this.props.deal.price}
            </li>
        );
    }
}

export default Deal;