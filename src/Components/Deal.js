import React, { Component } from 'react';

class Deal extends Component {
    deleteDeal(id){
        this.props.onDelete(id)
    }
    render() {
        return (
            <li className="Deal">
            {this.props.deal.address} - {this.props.deal.price} <a href="#" onClick={this.deleteDeal.bind(this, this.props.deal.id)}>Delete</a>
            </li>
        );
    }
}

export default Deal;