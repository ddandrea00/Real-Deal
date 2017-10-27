import React, { Component } from 'react';
import { ProgressBar } from 'primereact/components/progressbar/ProgressBar';


export default class Progress extends Component {

    constructor() {
        super();
        this.state = { value1: 0, value2: 65 };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            var val = this.state.value1;
            val += Math.floor(Math.random() * 10) + 1;
            if (val >= 100) {
                val = 100;
                this.setState({ msgs: [{ severity: 'info', summary: 'Success', detail: 'Process Completed' }] });
                clearInterval(this.interval);
            }
            this.setState({ value1: val });
        }, 2000);
    }

    render() {
        return (
            <div>
                    <h3>Buyer Status</h3>
                    <ProgressBar value={this.state.value1}></ProgressBar>

                    <h3>Seller Status</h3>
                    <ProgressBar value={this.state.value2}></ProgressBar>
              
            </div>
        );
    }
}