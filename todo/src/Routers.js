"use strict";
import { observer } from "mobx-react"
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import Reg from './components/Reg';
import Notes from './components/Notes';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Edit from './components/EditTask';
import Create from './components/CreateTask';




export default class Routers extends Component {
    render() {
        return (
            <Router>
                <div>
                    <a href="/">Домашняя страница {"\n"}</a>
                </div>
                <Switch>
                    <Route exact path="/" component={HomePage}></Route>
                    <Route exact path="/notes" component={Notes} ></Route>
                    <Route exact path="/registr" component={Reg} ></Route>
                    <Route exact path="/login" component={Login} ></Route>
                    <Route exact path="/edit" component={Edit} ></Route>
                    <Route exact path="/create" component={Create} ></Route>


                </Switch>
            </Router>
        )

    }
}