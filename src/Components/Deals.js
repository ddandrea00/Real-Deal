import React, { Component } from 'react';
import Deal from './Deal';

class Deals extends Component {
  
    render() {
        let deal;
        if (this.props.deals){
            deal = this.props.deals.map(deal => {
                return (
                    <Deal key={deal.address} deal={deal} />
                )
            });
        }
        return (
            <div className="Deals">
                Current Deals
                {deal}
            </div>
        );
    }
}

export default Deals;