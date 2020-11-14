import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

const ContentList = ({
  chapters,
  toggleReady,
  toggleSubSectionReady,
  addChapter,
  addSubsection,
}) => {
  return (
    <>
      <ul>
        {chapters &&
          chapters.map((chap, idx) => (
            <li key={idx}>
              <h2>{chap.title}</h2>
              <Form.Group controlId={["ready", idx].join("_")}>
                <Form.Check
                  onChange={() => toggleReady(idx)}
                  type="checkbox"
                  label="Mark as ready"
                  name="ready"
                  checked={chap.ready}
                />
              </Form.Group>
              <fieldset className="border p-2">
                <legend className="w-auto">Add new subsection</legend>
                <Form
                  onSubmit={(e) => {
                    e.preventDefault();
                    addSubsection(idx, e.target.title.value);
                    e.target.title.value = "";
                  }}
                >
                  <Row>
                    <Col md="6">
                      <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control size="sm" type="text" name="title" />
                        <Form.Text className="text-muted">
                          enter the title of subsection
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button variant="primary" size="sm" type="submit">
                    Submit
                  </Button>
                </Form>
              </fieldset>
              <ul>
                {chap.subsections &&
                  chap.subsections.map((subSection, sectionIdx) => (
                    <li key={sectionIdx}>
                      <h2>{subSection.title}</h2>
                      <Form.Group
                        controlId={["readySubsection", idx, sectionIdx].join(
                          "_"
                        )}
                      >
                        <Form.Check
                          onChange={() =>
                            toggleSubSectionReady(idx, sectionIdx)
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
      <fieldset className="border p-2">
        <legend className="w-auto">Add new chapter</legend>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            addChapter(e.target.title.value);
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
      </fieldset>
    </>
  );
};

export default ContentList;
