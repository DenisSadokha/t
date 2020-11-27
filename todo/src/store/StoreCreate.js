import makeRequest from "../requestHelper/request";
import StoreNotes from "./StoreNotes"
import { action, observable, decorate } from "mobx";
import makeRequestForUpdate from "../requestHelper/requestForGet";
import { requestApi } from "../config"
class StoreCreate {

    setTokenVal(token) {
        this.token = token;
    }
    createTask(title, body) {
        let form = {
            title: title,
            body: body,
            done: false
        }
        makeRequestForUpdate(requestApi.createApi + this.token, form, 'POST', requestApi.getApi + this.token);


    }




}
StoreCreate = decorate(StoreCreate, {


})
export default new StoreCreate();
