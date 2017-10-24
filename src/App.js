import React, { Component } from 'react';
import Deals from './Components/Deals';
import AddDeal from './Components/AddDeal';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      deals: []
    }
  }

  //this is where you want to make your AJAX call for data! :) checkout documentation for lifecycle methods to understand how and when they render.
 componentWillMount(){
   this.setState({deals: [
     {
       address: "317 N Orange Street",
       address2: "",
       city: "Philadelphia",
       state: "PA",
       zip: "19121",
       price: "$217,000",
       agreedate: "March 1st, 2017",
       closedate: "May 3rd, 2017"
     },
     {
       address: "1308 N Carlisle",
       address2: "",
       city: "Philadelphia",
       state: "PA",
       zip: "19121",
       price: "$343,000",
       agreedate: "April 1st, 2017",
       closedate: "June 14th, 2017"
     },
     {
       address: "210 Front Street",
       address2: "",
       city: "Philadelphia",
       state: "PA",
       zip: "19121",
       price: "$560,000",
       agreedate: "May 1st, 2017",
       closedate: "June 5th, 2017"
     },
     
   ]});
 }

//  Push to api to be stored in db
 handleAddDeal(deal){
   let deals = this.state.deals;
   deals.push(deal);
   this.setState({deals:deals})
 }
  render() {
    return (
      <div className="App">
        <AddDeal addDeal={this.handleAddDeal.bind(this)} />
        <Deals deals={this.state.deals} />
      </div>
    );
  }
}

export default App;
