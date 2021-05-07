import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Login from '../screens/login/view'
import Dashboard from "../screens/dashboard/view"

const route = () => (
    <BrowserRouter>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" exact component={Login} />
    </BrowserRouter>
)

export default route;
