import React, { Component } from "react"
import View from "./view"

class listing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            UsershippingDetails: {},
           shippindDetailPopUp: false,
        };
    }

    handlePay = () => {
        // if(Object.keys(this.state.shippingDetails).length === 0){ }
        this.setState({
            shippindDetailPopUp: true
        });
    }

    handleClose = () => {
        this.setState({
            shippindDetailPopUp: false
        });
    }

    render(){
        return(
            <View 
                state={this.state}
                handlePay={this.handlePay}
                handleClose={this.handleClose}
            />
        );
    }
} 

export default listing;
