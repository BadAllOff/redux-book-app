import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React from "react";
import { BrowserRouter, matchPath, Route, Switch } from "react-router-dom";

import store from "./redux/store";
import { Provider } from "react-redux";
import Main from "./components/pages/Main";
import Chapter from "./components/pages/Chapter";

import { fetchChapters } from "./redux/actions/chapters";

const routes = [
  {
    component: Main,
    exact: true,
    strict: true,
    path: "/",
    loadData: () => {
      return store.dispatch(fetchChapters());
    },
  },
  {
    component: Chapter,
    exact: true,
    strict: true,
    path: "/chapters/:id",
    loadData: (match) => {
      return store.dispatch(fetchChapters());
      // return store.dispatch(fetchChapters(match.params.id));
    },
  },
];

const onLoad = () => {
  routes.some((route) => {
    const match = matchPath(window.location.pathname, route);
    if (match && route.loadData) route.loadData(match);
    return match;
  });
};

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
