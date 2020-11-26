import { Observer, observer } from "mobx-react";
import { observable } from "mobx"
import React, { Component } from "react";
import store from "../store/StoreLog"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router"



class Login extends Component {
    constructor(props) {
        super(props)
        this.loginIn = React.createRef();
        this.passIn = React.createRef();
        this.messIn = React.createRef();

    }


    render() {
        if (store.isValid) {
            return (

                <Redirect push to="/notes"></Redirect>
            )
        }
        return (
            <div>
                <input placeholder="Логин" ref={this.loginIn}>
                </input>
                <input placeholder="Пароль" ref={this.passIn}>
                </input>
                <button onClick={() => store.signIn(this.loginIn.current.value,
                    this.passIn.current.value)} >
                    Войти
            </button>



                <h1 ref={this.messIn}>
                    {store.mess}
                </h1>
            </div>

        )
    }


}
export default observer(Login);
