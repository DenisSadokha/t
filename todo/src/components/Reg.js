import { Observer, observer } from "mobx-react";
import { observable } from "mobx"
import React, { Component } from "react";
import store from "../store/StoreReg"
class Reg extends Component {
    constructor(props) {
        super(props);
        this.loginIn = React.createRef();
        this.passIn = React.createRef();
        this.passCheckIn = React.createRef();


    }
    
    login = store.login;
    password = store.pass;
    passwordCheck = store.passCheck;
    render() {
        return (
            <div>
                <input placeholder="Логин" ref={this.loginIn} />

                <input placeholder="Пароль" ref={this.passIn} />

                <input placeholder="Повторно пароль" ref={this.passCheckIn} />
                <button onClick={() => store.onRegistr(this.loginIn.current.value,
                    this.passIn.current.value, this.passCheckIn.current.value)}>
                    Зарегистриоваться
           </button>
                <h1>
                    {store.status}
                </h1>

            </div>
        )
    }

}
export default observer(Reg);
