import React, { Component } from "react"
import View from "./view"

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
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

        if(this.state.firstname === "") {
            alert("First name is required");
            return
        }
        if(this.state.lastname === "") {
            alert("Last name is required");
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
            alert("ok");
            this.props.history.push("/login");
        }
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
