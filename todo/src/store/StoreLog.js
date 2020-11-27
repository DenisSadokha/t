"use strict"
import makeRequest from "../requestHelper/request"
import { action, observable, decorate, computed } from "mobx";
import StoreNotes from "./StoreNotes"
import { requestApi } from "../config"

let form;

class StoreLog {
  login;
  pass;
  mess;
  isValid;
  token;
  signIn(login, pass) {
    form = {
      email: login,
      password: pass
    }

    const req = makeRequest(requestApi.loginApi, form, 'POST')
      .then(json => {
        if (json !== false) {
          makeRequest(requestApi.getApi + json.id, null, 'GET')
            .then(jsonArr => {
              if (jsonArr !== false) {
                StoreNotes.isAuth = true;
                StoreNotes.arrTask = jsonArr;
                this.token = json.id;
                this.isValid = true;
                StoreNotes.loadComplete();
                this.mess = '';


              } else {
                console.log("FALSE")
                return false;

              }
            })

        } else {
          this.isValid = false;
          this.mess = "ошибка входа";

        }
      });

  }
  setToken(store, token) {
    store.setTokenVal(token)
  }




}

StoreLog = decorate(StoreLog, {
  mess: observable,
  isValid: observable,

})
export default new StoreLog();
