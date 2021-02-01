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

const routes = [
  { component: Main, exact: true, strict: true, path: "/" },
  { component: Chapter, exact: true, strict: true, path: "/chapters/:id" },
];
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {routes.map((route, idx) => (
            <Route {...route} key={idx} />
          ))}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
