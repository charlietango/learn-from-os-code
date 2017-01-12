import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import About from "./pages/About";
import Layout from "./pages/Layout";
import Main from "./pages/Main";

import store from "./store";

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Main}></IndexRoute>
        <Route path="about" name="about" component={About}></Route>
      </Route>
    </Router>
  </Provider>,
app);
