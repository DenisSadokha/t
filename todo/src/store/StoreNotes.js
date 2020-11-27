"use strict"
import makeRequest from "../requestHelper/request"
import { action, observable, decorate, computed, makeA } from "mobx";
import StoreCreate from "./StoreCreate"

class StoreNotes {
    arrTask = [];
    userId;
    token;
    isLoading;
    isAuth;
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



    StoreNotes = decorate(StoreNotes, {
        isAuth: observable,
        arrTask: observable,
        update: action,
        clear: action,
        isLoading: observable,
        loadStart: action,
        loadComplete: action,
    })

}
export default new StoreNotes();
