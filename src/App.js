import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";
import Archive from "./components/archive";
import store from "./redux/store";
import { getOffices } from "./redux/actions/getOffices";
import { getRecords } from "./redux/actions/records";
var Hoodie = require("@hoodie/client");

function App() {
  var hoodie = new Hoodie({
    url: window.location.origin,
    PouchDB: require("pouchdb-browser").default,
  });

  hoodie.account.get("session").then(function (session) {
    if (session) {
      console.log("user in");
    } else {
      console.log("no user in");
    }
  });

  useEffect(() => {
    store.dispatch(getOffices());
    store.dispatch(getRecords());
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/archive" component={Archive} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
