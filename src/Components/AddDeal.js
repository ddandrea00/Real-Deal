import React, { Component } from 'react';
import uuid from 'uuid';


class AddDeal extends Component {
    constructor(){
        super();
        this.state = {
            newDeal:{}
        }
    }

    handleSubmit(e){
        if(this.refs.address.value === ''){
            alert('Must have Address');
        } else {
            this.setState({newDeal:{
                id: uuid.v4(),
                address: this.refs.address.value,
                address2: this.refs.address2.value,
                city: this.refs.city.value,
                state: this.refs.state.value,
                zip: this.refs.zip.value,
                price: this.refs.price.value,
                agreedate: this.refs.agreedate.value,
                closedate: this.refs.closedate.value
            }}, function(){
                console.log(this.state);
                this.props.addDeal(this.state.newDeal);
            });
        }
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h3> New Deal </h3>
                 <form onSubmit={this.handleSubmit.bind(this)}>
                  <div>
                    <label>Address</label>
                    <br />  
                    <input type="text" ref="address" />
                  </div>
                  <div>
                      <label>Address 2</label>
                      <br />
                      <input type="text" ref="address2" />
                  </div>
                  <div>
                      <label>City</label>
                      <br />
                      <input type="text" ref="city" />
                  </div>
                  <div>
                      <label>State</label>
                      <br />
                      <input type="text" ref="state" />
                  </div>
                  <div>
                      <label>Zip</label>
                      <br />
                      <input type="text" ref="zip" />
                  </div>
                  <div>
                      <label>Price</label>
                      <br />
                      <input type="text" ref="price" />
                  </div>
                  <div>
                      <label>Agreement of Sale Date</label>
                      <br />
                      <input type="text" ref="agreedate" />
                  </div>
                  <div>
                      <label>Closing Date</label>
                      <br />
                      <input type="text" ref="closedate" />
                  </div>
                  <input type="submit" value="Submit" />
                 </form>
            </div>
        );
    }
}

export default AddDeal;