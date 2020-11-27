"use strict"
import makeRequest from "../requestHelper/request"
import { requestApi } from "../config"

import { action, observable, decorate } from "mobx";
let form;
class Store {

    login;
    pass;
    passCheck;
    status;
    onRegistr(login, password, passCheck) {
        if (password === passCheck) {
            form = {
                email: login,
                password: password
            }
            const req = makeRequest(requestApi.registrApi, form, 'POST')
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
