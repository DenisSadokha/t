import edit from "./StoreEdit"
import { action, observable, decorate } from "mobx";
import { Redirect } from "react-router"
import makeRequestForUpdate from "../requestHelper/requestForGet";
import StoreNotes from "./StoreNotes"
import { requestApi } from "../config"
class StoreArticle {
   openEditor(title, body, token, id, done) {
      edit.setProps(title, body, token, id, done);

   }
   completeTask(title, body, token, id, done) {
      let url = requestApi.editApi + id + "?access_token=" + token;
      let form = {
         title: title,
         body: body,
         done: done,
         id: id
      }
      makeRequestForUpdate(url, form, "PUT", requestApi.getApi + token, true);

   }
   deleteTask(id, token) {
      let url = requestApi.deleteApi + id + "?access_token=" + token;
      makeRequestForUpdate(url, null, 'DELETE', requestApi.getApi + token, true);

   }


}
StoreArticle = decorate(StoreArticle, {


})
export default new StoreArticle();
