import { observer } from "mobx-react";
import React,{Component} from "react";
import store from "../store/StoreEdit";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router"

class EditTask extends Component {
     constructor(props){
         super(props);
        //  this.title = title;
        //  this.body = body; 
        //  this.id = id; 
        this.title = React.createRef();
        this.body = React.createRef();
        


     }


    render(){
        if(store.check){
            return(
                <Redirect push to="/notes"></Redirect>

            )
        } else {

        console.log(store.title)
        return (
            <div>
            <textarea defaultValue = {store.title} ref={this.title}>
             
            </textarea>
            <p>
                
            </p>
            <textarea defaultValue = {store.body} ref={this.body} >

            </textarea>
            <Link to = "/notes">
    
            <button onClick = {() => store.saveEditTask(this.title.current.value, this.body.current.value)}>
                Сохранить
            </button>
            </Link>
          
                <button onClick = {() => store.closeT()}>
                    Закрыть
                </button>
           

            </div>
        )
         }

    }

}
export default observer(EditTask);