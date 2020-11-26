"use strict"
import makeRequest from "../requestHelper/request"
import { action, observable, decorate, computed, makeA } from "mobx";
import StoreCreate from "./StoreCreate"

let regApi = "http://localhost:3001/api/tasks?access_token="

class StoreNotes {
    arrTask = [];
    userId;
    token;
    isLoading;
    clear() {
        this.arrTask = [];

    }
    loadComplete() {
        this.isLoading = true;

    }
    loadStart() {
        this.isLoading = false;

    }
    update(val) {
        this.arrTask = val.concat();
    }
    setToken(token){
        StoreCreate.setTokenVal(token)
    }
    setAuth(auth, token, arrTask) {
        console.log("AUTHOR" + auth)
        console.log(token)
        this.token = token;
        this.auth = auth;
        this.arrTask = arrTask;

    }

    get allTask() {
        return this.arrTask;
    }


    StoreNotes = decorate(StoreNotes, {
        auth: observable,
        // userId: observable,
        setAuth: action,
        status: observable,
        makeRequests: action,
        token: observable,
        arrTask: observable,
        allTask: computed,
        update: action,
        clear: action,
        isLoading: observable,
        loadStart: action,
        loadComplete: action,



        // request: action,

    })

}
export default new StoreNotes();