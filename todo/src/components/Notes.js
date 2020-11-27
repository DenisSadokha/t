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
import StoreCreate from "../store/StoreCreate";

class Notes extends Component {
  
  render() {
    console.log("render start")
    let arr = store.arrTask;

    if (store.isAuth) {
      if (arr.length > 0) {
        var tempNews = arr.map(function (item, index) {
          return <div key={arr.id}>
            <Article art={item} token={storeLog.token} />
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
              <button onClick={() => storeLog.setToken(StoreCreate, storeLog.token)}>
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
