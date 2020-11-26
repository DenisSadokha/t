import edit from "./StoreEdit"
import { action, observable, decorate } from "mobx";
import { Redirect } from "react-router"
import makeRequestForUpdate from "../requestHelper/requestForGet";
import StoreNotes from "./StoreNotes"
let  editApi ='http://localhost:3001/api/tasks/';
let getApi = "http://localhost:3001/api/tasks?access_token="
let deleteApi = "http://localhost:3001/api/tasks/"
class StoreArticle{
   openEditor(title, body, token, id, done){
  edit.setProps(title, body, token, id, done);

   }
   completeTask(title, body, token, id, done){
      let url = editApi+id+"?access_token="+token;
      let form = {
         title: title,
         body: body,
         done: done,
         id: id
     }
      makeRequestForUpdate(url, form, "PUT", getApi+token, true);

   }
   deleteTask(id, token){
      let url = deleteApi+id+"?access_token="+token;
         makeRequestForUpdate(url, null, 'DELETE', getApi+token, true);

   }


}
StoreArticle = decorate(StoreArticle, {
   
 
 })
 export default new StoreArticle();
