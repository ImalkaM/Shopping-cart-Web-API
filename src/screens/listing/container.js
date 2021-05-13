import React, { Component } from "react"
import View from "./view"
import axios from 'axios';
import {API_URL} from "../../api_url"

class listing extends Component {

    constructor(props) {
        super(props);
        this.state = {
           UsershippingDetails: {},
           shippindDetailPopUp: false,
           itemDetails: {},
           responseMessage: ""
        };
    }

    componentDidMount() {
        let id = this.props.match.params.id
        axios.get(API_URL + 'api/products/'+id)
        .then(res => {
            console.log(res.data)
            this.setState(() => ({ itemDetails: res.data}));
        })
        .catch(error => { 
            alert(error.message)
        });
    }
    
    handlePay = (qty) => {
        if(qty > 0) {
            this.setState({
                shippindDetailPopUp: true
            });
        }
        else{
            alert("Select Quantity")
        }
        // if(Object.keys(this.state.shippingDetails).length === 0){ }
    }

    handleClose = () => {
        this.setState({
            shippindDetailPopUp: false
        });
    }

    handleAddToCart = () => {
        let userId = JSON.parse(localStorage.getItem("document"));
        if(userId !== null) {
            axios.post(API_URL + 'api/carts', {
                userId: userId.uId,
                name: this.state.itemDetails.name,
                category: this.state.itemDetails.category,
                price: this.state.itemDetails.price,
                imgUrl: this.state.itemDetails.imgUrl,
                description: this.state.itemDetails.description,
            })
            .then(res => {
                
                alert("Item added to cart")
                this.props.history.push("/cart")
            })
            .catch(error => { 
                alert(error.message)
            }); 
        }
        else{
            alert("You need to login")
        }
    }

    render(){
        return(
            <View 
                state={this.state}
                itemDetails={this.state.itemDetails}
                handlePay={this.handlePay}
                handleClose={this.handleClose}
                handleAddToCart={this.handleAddToCart}
            />
        );
    }
} 

export default listing;
