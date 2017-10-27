import React, {Component} from 'react';
import Home from './Components/Home';
import Deals from './Components/Deals';
import AddDeal from './Components/AddDeal';
import { Switch, Route } from 'react-router-dom';

class Routes extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Switch>
                <Route
                    exact path="/" 
                    render={props => <Home 
                        addDeal={this.props.addDeal}
                        deals={this.props.deals}
                        onDelete={this.props.onDelete}
                    />}


                />
                <Route
                    path="/home"
                    render={props => <Home
                        addDeal={this.props.addDeal}
                        deals={this.props.deals}
                        onDelete={this.props.onDelete}
                    />}
                />
                <Route
                    path="/deals"
                    render={props => <Deals
                        addDeal={this.props.addDeal}
                        deals={this.props.deals}
                        onDelete={this.props.onDelete}
                    />}
                />
            </Switch>
        )
    }

}

export default Routes;