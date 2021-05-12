import React, { Component } from "react"
import View from "./view"
import axios from 'axios';
import {API_URL} from "../../api_url"

class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {
           UsershippingDetails: {},
           shippindDetailPopUp: false,
           cartItems: []
        };
    }

    componentDidMount() {
        let userId = JSON.parse(localStorage.getItem("document"));
        axios.post(API_URL + 'api/carts/myCart', {
            userId: userId.uId,
        })
        .then(res => {
            console.log(res.data);
            this.setState(() => ({ cartItems: res.data}));
        })
        .catch(error => { 
            alert(error.message)
        });
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

    handleDeletItem = (id) => {
        axios.delete(API_URL + 'api/carts/'+id)
        .then(res => {
            window.location.reload();
        })
        .catch(error => { 
            alert(error.message)
        });
    }

    render(){
        return(
            <View 
                state={this.state}
                handlePay={this.handlePay}
                handleClose={this.handleClose}
                handleDeletItem={this.handleDeletItem}
            />
        );
    }
} 

export default Checkout;
