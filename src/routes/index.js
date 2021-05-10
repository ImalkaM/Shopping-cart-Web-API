import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Login from '../screens/login/container'
import Dashboard from "../screens/dashboard/conatiner"
import Cart from "../screens/cart/container"
import Listing from "../screens/listing/container"



const route = () => (
    <BrowserRouter>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" exact component={Login} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/listing" exact component={Listing} />
    </BrowserRouter>
)

export default route;
