
import React, { Component } from "react"
import { Observer, observer } from "mobx-react";
import store from "../store/StoreArticle"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



class Article extends Component {
    constructor(props){
        super(props);
        this.art = props.art;
        this.id =props.art.id;
        this.token = props.token;
        


    }
    render(){
        let text = this.props.art.done ? "Отменить" : "Выполнить"
        let status = this.props.art.done ? "Выполнена" :"Не выполнена"
        let color = this.props.art.done ? "green" : "gray"
        return(
            <div>
                <h3 style={{color: color}}>
                    {status}
                </h3>
            <h1>
             {this.art.title}
            </h1>
            <p>
                {this.art.body}

            </p>
            <Link to = "/edit" >
            <button onClick = {() => store.openEditor(this.art.title, this.art.body, this.token, this.id, this.art.done)}> 
                Редактировать               
            </button>
            </Link>

            <button onClick = {() => store.completeTask(this.art.title, this.art.body, this.token, this.id, !this.art.done)}>
                {text}
            </button>
            <button onClick = {() => store.deleteTask(this.id,this.token)}>
                Удалить
            </button>
            </div>

        )
    }

}
export default  Article;