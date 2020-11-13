import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React from "react";
import { Container } from "react-bootstrap";
import ContentList from "./components/ContentList";
import store from "./redux/store";
import { Provider } from "react-redux";
import Filter from "./components/Filter";
import ChaptersCount from "./components/ChaptersCount";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <h1>Amazing book title</h1>
        <hr />
        <Filter />
        <ContentList />
        <ChaptersCount />
      </Container>
    </Provider>
  );
}

export default App;
