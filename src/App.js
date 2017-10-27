import React, { Component } from 'react';
import axios from 'axios';
import uuid from 'uuid';
import { Accordion, AccordionTab } from 'primereact/components/accordion/Accordion';
import NavigationBar from './Components/NavigationBar';
import NavItem from './Components/NavItem';
import { NavBar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap'
import Deals from './Components/Deals';
import Home from './Components/Home';
import AddDeal from './Components/AddDeal';
import Routes from './Routes';
import './App.css';



var navLinks = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "Deals",
    href: "/deals"
  },
  {
    title: "Profile",
    href: "/profile"
  },
]

class App extends Component {
  constructor(){
    super();
    this.state = {
      deals: []
    }
    this.handleAddDeal = this.handleAddDeal.bind(this);
    this.handleDeleteDeal = this.handleDeleteDeal.bind(this);
  }

  //this is where you want to make your AJAX call for data! :) checkout documentation for lifecycle methods to understand how and when they render.
 componentWillMount(){
   this.setState({deals: [
     {
       id: uuid.v4(),
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
       id: uuid.v4(),
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
       id: uuid.v4(),
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
 handleDeleteDeal(id) {
   let deals = this.state.deals;
   let index = deals.findIndex(x => x.id === id);
   deals.splice(index, 1);
   this.setState({ deals: deals })
 }
  render() {
    return (
      
      <div>  
      <NavigationBar navData={navLinks} />
      <main className="container">
            <Routes
            addDeal={this.handleAddDeal}
            deals={this.state.deals}
            onDelete={this.handleDeleteDeal}
            />
        </main>
      </div>
    )
  }
}

export default App;
