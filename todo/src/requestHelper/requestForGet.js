import makeRequest from "./request"
import StoreNotes from "../store/StoreNotes"
export default function makeRequestForUpdate(api, form, method, getApi, check){
       makeRequest(api, form, method).then(data => {
   
    if (data !== false) {
        console.log("succsessful!")
        makeRequest(getApi, null, 'GET')
            .then(jsonArr => {
                if (jsonArr !== false) {
                    if(check){
                        console.log("IS CHECK")
                    StoreNotes.clear();
                    }
                    StoreNotes.update(jsonArr); 
                    StoreNotes.loadComplete();
                } else {
                    StoreNotes.loadComplete();
                }
            })

    } else {
        console.log("not succsess")


    }
})
}