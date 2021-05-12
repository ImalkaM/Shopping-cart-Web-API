import React, { Component } from "react"
import View  from "./view"
import axios from 'axios';
import {API_URL} from "../../api_url"

class Dashboard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            // selectedItemId: ""
        };
    }

    componentDidMount() {
        axios.get(API_URL + 'api/products')
        .then(res => {
            this.setState(() => ({ products: res.data}));
        })
        .catch(error => { 
            alert(error.message)
        });
    }

    handleItemClick = (item) => {
        this.props.history.push({
            pathname: "/listing/"+item._id,
            // search: "?" + new URLSearchParams({id: item._id}).toString()
        })
    }

    handleAddToCart = (item) => {
        let userId = JSON.parse(localStorage.getItem("document"));
        if(userId !== null ) {
            axios.post(API_URL + 'api/carts', {
                userId: userId.uId,
                name: item.name,
                category: item.category,
                price: item.price,
                imgUrl: item.imgUrl,
                description: item.description,
            })
            .then(res => {
                alert("Item added to cart")
                this.props.history.push("/cart")
            }) 
            .catch(error => { 
                alert(error.message)
            });
        }
    }

    render() {
        return(
            <View 
                state={this.state}
                handleItemClick={this.handleItemClick}
                handleAddToCart={this.handleAddToCart}
            />
        )
    }
}

export default Dashboard;
