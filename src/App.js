import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React, { useReducer } from "react";
import { Container, Form } from "react-bootstrap";

function App() {
  return (
    <Container>
      <h1>Amazing book title</h1>
      <hr />
      <ContentList />
    </Container>
  );
}

export default App;

const ChapterReducer = function (state, action) {
  switch (action.type) {
    default:
      return state;
  }
};

const ContentList = () => {
  const [chapters, dispatch] = useReducer(ChapterReducer, [
    {
      title: "First Chapter",
      text: "Once upon a time ... and never again",
      ready: false,
    },
  ]);

  return (
    <>
      {chapters.map((chap) => (
        <div>
          <h2>{chap.title}</h2>
          <p>{chap.text}</p>
          <Form.Group controlId="ready">
            <Form.Check
              type="checkbox"
              label="Mark as ready"
              name="ready"
              checked={chap.ready}
            />
          </Form.Group>
        </div>
      ))}
    </>
  );
};
