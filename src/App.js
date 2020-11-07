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
    case "TOGGLE_CHAPTER_READY":
      return state.map((chapter, idx) =>
        idx === action.idx ? { ...chapter, ready: !chapter.ready } : chapter
      );
    case "TOGGLE_SUBSECTION_READY":
      return state.map((chapter, idx) =>
        idx === action.idx
          ? {
              ...chapter,
              subsections: chapter.subsections.map((subsection, sectionIdx) =>
                sectionIdx === action.sectionIdx
                  ? { ...subsection, ready: !subsection.ready }
                  : subsection
              ),
            }
          : chapter
      );

    case "ADD_CHAPTER":
      // console.log(state[0].subsections);
      return state.concat({
        title: action.title,
        ready: false,
        subsections: [],
      });
    case "ADD_SUBSECTION":
      return state[action.chapId].subsections.concat({
        title: action.title,
        ready: false,
      });
    default:
      return state;
  }
};

const FilterReducer = function (state, action) {
  switch (action.type) {
    case "SET_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const ContentList = () => {
  const [chapters, dispatch] = useReducer(ChapterReducer, [
    {
      title: "First Chapter",
      ready: false,
      subsections: [
        { title: "First sub", ready: false },
        { title: "Second sub", ready: false },
      ],
    },
  ]);

  const [visibilityFilter, dispatchFilter] = useReducer(
    FilterReducer,
    "SHOW_ALL"
  );

  const filters = {
    SHOW_ALL: () => true,
    SHOW_READY: (chapter) => !!chapter.ready,
    SHOW_NOTREADY: (chapter) => !chapter.ready,
  };

  return (
    <>
      <Container>
        <Row>
          <Button
            variant="outline-dark"
            size="sm"
            onClick={() => {
              dispatchFilter({ type: "SET_FILTER", filter: "SHOW_ALL" });
            }}
          >
            Show all
          </Button>
          <Button
            variant="outline-dark"
            size="sm"
            onClick={() => {
              dispatchFilter({ type: "SET_FILTER", filter: "SHOW_READY" });
            }}
          >
            Show ready
          </Button>
          <Button
            variant="outline-dark"
            size="sm"
            onClick={() => {
              dispatchFilter({ type: "SET_FILTER", filter: "SHOW_NOTREADY" });
            }}
          >
            Show not ready
          </Button>
        </Row>
      </Container>
      <ul>
        {chapters.filter(filters[visibilityFilter]).map((chap, idx) => (
          <li key={idx}>
            <h2>{chap.title}</h2>
            <Form.Group controlId={"ready" + idx}>
              <Form.Check
                onChange={() => dispatch({ type: "TOGGLE_CHAPTER_READY", idx })}
                type="checkbox"
                label="Mark as ready"
                name="ready"
                checked={chap.ready}
              />
            </Form.Group>
            <ul>
              {chap.subsections &&
                chap.subsections.map((subSection, sectionIdx) => (
                  <li key={sectionIdx}>
                    <h2>{subSection.title}</h2>
                    <Form.Group controlId={"readySubsection" + sectionIdx}>
                      <Form.Check
                        onChange={() =>
                          dispatch({
                            type: "TOGGLE_SUBSECTION_READY",
                            idx,
                            sectionIdx,
                          })
                        }
                        type="checkbox"
                        label="Mark as ready"
                        name="ready"
                        checked={subSection.ready}
                      />
                    </Form.Group>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
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
