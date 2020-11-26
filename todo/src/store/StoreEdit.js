import { action, observable, decorate } from "mobx";
import makeRequestForUpdate from "../requestHelper/requestForGet";

import StoreNotes from "./StoreNotes"
let reqApi = "http://localhost:3001/api/tasks/"
let getApi = "http://localhost:3001/api/tasks?access_token="
let arr = [{
    title: "newTitle",
    body: "newTextForFirst",
    done: false,
    id: 2
},
{
    title: "newTitle2",
    body: "newTextForFirst2",
    done: false,
    id: 3,
},
{
    title: "newTitle3",
    body: "newTextForFirst3",
    done: false,
    id: 4
}
]
class StoreEdit {
    check = false;
    setProps(title, body, token, idTask, done) {
        this.title = title;
        this.body = body;
        this.token = token;
        this.id = idTask;
        this.done = done;

    }
    closeT() {
       this.check = window.confirm("подтверждение закрытия заметки без сохранения")
       setTimeout(() => {
           this.check = false;
       },0)
    }


    saveEditTask(newTitle, newBody) {
   
        StoreNotes.loadStart();
        let form = {
            title: newTitle,
            body: newBody,
            done: this.done,
            id: this.id
        }
        let reqApi2 = reqApi + this.id + "?access_token=" + this.token;
        makeRequestForUpdate(reqApi2, form, 'PUT', getApi+ this.token);




    }
}
StoreEdit = decorate(StoreEdit, {
    setProps: action,
    title: observable,
    body: observable,
    id: observable,
    check: observable,
    closeT: action,

})
export default new StoreEdit();