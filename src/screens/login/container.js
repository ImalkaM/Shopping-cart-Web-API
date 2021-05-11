import React, { Component } from "react"
import View from "./view"
import axios from 'axios';
import {API_URL} from "../../api_url"

class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errorMessage: ""
        };
    }
    
    handleLogin = () => {
        if(this.state.email === "") {
            alert("Email is required");
            return
        }
        if(this.state.password === "") {
            alert("Password is required");
            return
        }  
        if(this.state.username !== ""  && this.state.password !== "" ) {
            axios.post(API_URL + 'api/auth', {
                email: this.state.email,
                password: this.state.password
            })
            .then(res => {
                this.setState(() => ({ response: res.data}));
                localStorage.setItem('document',JSON.stringify(res.data));
            })
            .catch(error => { 
                this.setState({
                    errorMessage: error.message
                })
                alert(error.message)
            });
        }
    };

    handleLoginData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return <View 
            state={this.state}
            handleLogin={this.handleLogin}
            handleLoginData={this.handleLoginData}
        />
    }
}

export default Login;
