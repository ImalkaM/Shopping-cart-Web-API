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

    render() {
        return(
            <View 
                state={this.state}
                handleItemClick={this.handleItemClick}
            />
        )
    }
}

export default Dashboard;
