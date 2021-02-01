import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import store from "./redux/store";
import { Provider } from "react-redux";
import Main from "./components/pages/Main";
import Chapter from "./components/pages/Chapter";

import { fetchChapters } from "./redux/actions/chapters";

store.dispatch(fetchChapters());

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route component={Main} path="/" strict exact />
          <Route component={Chapter} path="/chapters/:id" strict exact />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
