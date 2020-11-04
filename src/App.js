import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React, { useReducer } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";

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
    case "TOGGLE_READY":
      return state.map((chapter, idx) =>
        idx === action.idx ? { ...chapter, ready: !chapter.ready } : chapter
      );
    case "ADD_CHAPTER":
      return state.concat({ title: action.title, ready: false });
    default:
      return state;
  }
};

const ContentList = () => {
  const [chapters, dispatch] = useReducer(ChapterReducer, [
    {
      title: "First Chapter",
      ready: false,
    },
  ]);

  return (
    <>
      {chapters.map((chap, idx) => (
        <div key={idx}>
          <h2>{chap.title}</h2>
          <Form.Group controlId={"ready" + idx}>
            <Form.Check
              onChange={() => dispatch({ type: "TOGGLE_READY", idx })}
              type="checkbox"
              label="Mark as ready"
              name="ready"
              checked={chap.ready}
            />
          </Form.Group>
        </div>
      ))}

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD_CHAPTER", title: e.target.title.value });
          e.target.title.value = "";
        }}
      >
        <Row>
          <Col md="6">
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control size="lg" type="text" name="title" />
              <Form.Text className="text-muted">
                enter the title of chapter
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
