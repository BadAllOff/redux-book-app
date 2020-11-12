import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React from "react";
import { Container } from "react-bootstrap";
import ContentList from "./components/ContentList";
import store from "./redux/store";
import { Provider } from "react-redux";
import Filter from "./components/Filter";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <h1>Amazing book title</h1>
        <hr />
        <Filter />
        <ContentList />
      </Container>
    </Provider>
  );
}

export default App;
