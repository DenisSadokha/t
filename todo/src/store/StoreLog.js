"use strict"
import makeRequest from "../requestHelper/request"
import { action, observable, decorate, computed } from "mobx";
import StoreNotes from "./StoreNotes"
let form;
const reqApi = "http://localhost:3001/api/Users/login";
let regApi = "http://localhost:3001/api/tasks?access_token="

class StoreLog {
  login;
  pass;
  mess;
  isValid;
  signIn(login, pass) {
    // this.mess="ошибка входа";
    // this.login = login;
    // this.pass = pass;
    form = {
      email: login,
      password: pass
    }

    const req = makeRequest(reqApi, form, 'POST')
      .then(json => {
        if (json !== false) {
          makeRequest(regApi+json.id, null, 'GET')
            .then(jsonArr => {
              if (jsonArr !== false) {
      
                StoreNotes.setAuth(true, json.id, jsonArr);
                this.isValid = true;
                StoreNotes.loadComplete();
                this.mess = '';


              } else {
                console.log("FALSE")
                return false;

              }
            })
          // this.isValid = true;
          // this.mess = '';
          // console.log(json.userId)
          // console.log(json);
        } else {
          this.isValid = false;
          this.mess = "ошибка входа";

        }
      });

  }




}

StoreLog = decorate(StoreLog, {
  // login: observable,
  // pass: observable,
  mess: observable,
  isValid: observable,
  // signIn: action
})
export default new StoreLog();