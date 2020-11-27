import { action, observable, decorate } from "mobx";
import makeRequestForUpdate from "../requestHelper/requestForGet";
import { requestApi } from "../config"
import StoreNotes from "./StoreNotes"
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
        }, 0)
    }


    saveEditTask(newTitle, newBody) {

        StoreNotes.loadStart();
        let form = {
            title: newTitle,
            body: newBody,
            done: this.done,
            id: this.id
        }
        let reqApi2 = requestApi.editApi + this.id + "?access_token=" + this.token;
        makeRequestForUpdate(reqApi2, form, 'PUT', requestApi.getApi + this.token);




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
