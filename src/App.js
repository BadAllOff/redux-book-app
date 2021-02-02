import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React from "react";
import { Router, matchPath, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import store from "./redux/store";
import { Provider } from "react-redux";
import Main from "./components/pages/Main";
import Chapter from "./components/pages/Chapter";

import { fetchChapters } from "./redux/slices/chapters";

const history = createBrowserHistory();

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
    loadData: () => {
      return store.dispatch(fetchChapters());
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

onLoad();

history.listen(() => onLoad());

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          {routes.map((route, idx) => (
            <Route {...route} key={idx} />
          ))}
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
