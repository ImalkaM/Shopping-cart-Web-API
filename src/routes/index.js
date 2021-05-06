import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Login from '../screens/login/view'

const route = () => (
    <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
    </BrowserRouter>
)

export default route;
