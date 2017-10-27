import React, { Component } from 'react';
import { Accordion,AccordionTab } from 'primereact/components/accordion/Accordion';
import AddDeal from './AddDeal';
import Deal from './Deal';
import Progress from './Progress';

class Deals extends Component {
    constructor(props){
        super(props)
    }
  

    render() {
        const style = {
            h1:{
                textAlign: "center"
            }
        }

        let deal;
        if (this.props.deals){
            deal = this.props.deals.map((deal, key) => (
                <AccordionTab key={key} header={deal.address}> 
                        <Deal onDelete={this.props.onDelete}  deal={deal} /> 
                    </AccordionTab> 
                )       
            );
        }
        return (
            <div className="Deals">
                <h1 style={style.h1}> Current Deals </h1>
                <AddDeal />
                    <Accordion>
                        {deal}
                    </Accordion>
            </div>
        );
    }
}

export default Deals;
