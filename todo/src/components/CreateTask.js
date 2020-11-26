import React, {Component} from "react";
import store from "../store/StoreCreate";
import { observer } from "mobx-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class CreateTask extends Component {
    constructor(props){
        super(props);
        this.title = React.createRef();
        this.body = React.createRef();


    }
 render(){
    return (
        <div>
        <textarea ref={this.title} >
         
        </textarea>
        <textarea ref={this.body}>

        </textarea>
        <Link to = '/notes'>

        <button onClick = {() => store.createTask(this.title.current.value, this.body.current.value)}>
            Создать
        </button>
        </Link>

        </div>
    )
 }


}
export default observer(CreateTask);