"use strict"
import makeRequest from "../requestHelper/request"

import { action, observable, decorate } from "mobx";
const regApi = 'http://localhost:3001/api/Users'
let form;
class Store {

    login;
    pass;
    passCheck;
    status;
    onRegistr(login, password, passCheck) {
        if (password === passCheck) {

            // this.login=login;
            // this.pass=password;
            // this.passCheck=passCheck;
            // this.status="вы зарегистрировались!"
            form = {
                email: login,
                password: password
            }
            const req = makeRequest(regApi, form, 'POST')
                .then(data => {
                    if (data !== false) {
                        this.status = "вы успешно зарегистрировались"

                    } else {
                        this.status = "ошибка регистрации"

                    }

                });
            console.log(req);
        } else {
            this.status = "пароли не совпадают";
        }


    }


}
Store = decorate(Store, {
    login: observable,
    pass: observable,
    passCheck: observable,
    status: observable,
    onRegistr: action
})
export default new Store();