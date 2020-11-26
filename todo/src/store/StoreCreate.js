import makeRequest from "../requestHelper/request";
import StoreNotes from "./StoreNotes"
import { action, observable, decorate } from "mobx";
import makeRequestForUpdate from "../requestHelper/requestForGet";

let getApi = "http://localhost:3001/api/tasks?access_token="
let createApi = "http://localhost:3001/api/tasks?access_token="
class StoreCreate { 

    setTokenVal(token){
        this.token = token;
    }
     createTask(title, body){
         let form = {
            title: title,
            body: body,
            done: false
          }
          makeRequestForUpdate(createApi+this.token, form, 'POST', getApi+ this.token);
 

     }




}
StoreCreate = decorate(StoreCreate, {
 

})
export default new StoreCreate();