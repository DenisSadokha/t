"use strict"
import React, { Component } from "react";
import Login from "./Login"
import { Observer, observer } from "mobx-react";

import Login1 from "./Reg"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import store from "../store/StoreNotes"
import storeLog from "../store/StoreLog"
import Article from "./Article"
import { Redirect } from "react-router"



let arrNotes = [];
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
  id: 3
}]

class Notes extends Component {
  render() {
    console.log("render start")
    arr = store.arrTask;

    if (store.auth) {
      if (arr.length > 0) {
        var tempNews = arr.map(function (item, index) {
          return <div key={arr.id}>
            <Article art={item} token={store.token} />
          </div>
        });
      } else {
        tempNews = <p>заметок нету</p>
      }
      console.log("ITS STORE TASK " + store.arrTask)
      console.log("TEST " + tempNews.length)
      if (store.isLoading) {
        return (

          <div>
            <Link to="/create">
              <button onClick = {() => store.setToken(store.token)}>
                Создать заметку
               </button>
            </Link>
            {tempNews}
          </div>
  
        )
      } else {
        return (
          <div>
            ...Loading
          </div>
        )
      }
      







    } else {
      return (
        <Redirect push to="/login"></Redirect>
      )
    }
  }




}
export default observer(Notes);