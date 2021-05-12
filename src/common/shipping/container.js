import React, { Component } from "react"
import Checkout from "./checkout"
import axios from 'axios';
import {API_URL} from "../../api_url"

class CheckoutContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName:"",
                lastName: "",
                address1: "",
                address2: "",
                city: "",
                state: "",
                zip: "",
                country: ""
            },
            card: {
                cardName: "",
                cardNumber: "",
                expDate: "",
                cvv: ""
            }

        };
    }

    // componentDidMount() {
    //     let id = this.props.match.params.id
    //     axios.get(API_URL + 'api/products/'+id)
    //     .then(res => {
    //         console.log(res.data)
    //         this.setState(() => ({ itemDetails: res.data}));
    //     })
    //     .catch(error => { 
    //         alert(error.message)
    //     });
    // }

    handleAddressForm = (e) => {
        this.setState(prevState => ({
            user: {                   
                ...prevState.user,    
                [e.target.name]:e.target.value,
            }
        }))
    }
    
    handlePaymentForm = (e) => {
        this.setState(prevState => ({
            card: {                   
                ...prevState.card,    
                [e.target.name]:e.target.value,
            }
        }))
    }

    handlePlaceorder = () => {
        let userId = JSON.parse(localStorage.getItem("document"));
        if(userId !== null) {
            axios.post(API_URL + 'api/orders', {
                // header: {
                //     'token': userId.token
                // },
                userId: userId.uId,
                user: this.state.user,
                card: this.state.card
            })
            .then(res => {
                console.log(res.data)
                // this.setState(() => ({ itemDetails: res.data}));
            })
            .catch(error => { 
                alert(error.message)
            });
        }
        else{
            alert("you need to login")
        }
    } 

    render(){
        return(
            <Checkout 
                state={this.state}
                open={this.props.open}
                handleClose={this.props.handleClose}
                handleAddressForm={this.handleAddressForm}
                handlePaymentForm={this.handlePaymentForm}
                handlePlaceorder={this.handlePlaceorder}
            />
        );
    }
} 

export default CheckoutContainer;
