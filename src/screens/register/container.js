import React, { Component } from "react"
import axios from 'axios';
import View from "./view"

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:"",
            mobile: "",
            email: "",
            password: "",
            conpass: ""
        };
    }

    handleRegisterForm = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    registerNow = () => {

        if(this.state.username === "") {
            alert("User name is required");
            return
        }
        if(this.state.mobile === "") {
            alert("mobile name is required");
            return
        }
        if(this.state.email === "") {
            alert("Email name is required");
            return
        }
        if(this.state.password === "") {
            alert("Password name is required");
            return
        }
        if(this.state.conpass === "") {
            alert("Confirm password name is required");
            return
        }
        if(this.state.password !== this.state.conpass) {
            alert("The passwords entered do not match");
            return
        }

        if(this.state.firstname !== "" && this.state.lastname !== "" && this.state.mobile !== "" && this.state.email !== "" && this.state.password !== "" && this.state.conpass !== "" ) {
            axios.post('http://localhost:5000/api/users', {
                userName: this.state.firstname+ " " +this.state.lastname,
                email: this.state.email,
                password: this.state.password
            })
         
            .then(res => {
                console.log(res)
                this.props.history.push("/login");
            })
        }
        // axios.get('https://api.github.com/user', {
        //     headers: {
        //         'Authorization': `token ${access_token}`
        //     }
        // })
    }
    render(){
        return(
            <View 
                state={this.state}
                handleRegisterForm={this.handleRegisterForm}
                registerNow={this.registerNow}
            />
        );
    }
} 

export default Register;
