import React, { Component } from 'react';
import Progress from './Progress';

class Deal extends Component {
    deleteDeal(id){
        this.props.onDelete(id)
    }
    render() {
        return (
            <li className="Deal">
                <h2> {this.props.deal.address} - {this.props.deal.city}, {this.props.deal.state} ({this.props.deal.zip}) - {this.props.deal.price} </h2>
            <br></br>
            <h4> Agreement of Sale: {this.props.deal.agreedate} </h4>
            <br></br> 
            <h4>Closing Date: {this.props.deal.closedate}</h4>
            <br></br>

            <Progress /> 
            <br></br>
            <a href="#" onClick={this.deleteDeal.bind(this, this.props.deal.id)}>Delete</a>
            </li>
        );
    }
}

export default Deal;