import React from "react";
import { connect } from "react-redux";
import { Button, Form, Row, Col } from "react-bootstrap";

const ContentList = ({
  chapters,
  toggleReady,
  toggleSubSectionReady,
  addChapter,
}) => {
  return (
    <>
      <ul>
        {chapters &&
          chapters.map((chap, idx) => (
            <li key={idx}>
              <h2>{chap.title}</h2>
              <Form.Group controlId={"ready" + idx}>
                <Form.Check
                  onChange={() =>
                    toggleReady({ type: "TOGGLE_CHAPTER_READY", idx })
                  }
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
                            toggleSubSectionReady({
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
          addChapter({ type: "ADD_CHAPTER", title: e.target.title.value });
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

const mapStateToProps = (state) => ({
  chapters: state,
});

export default connect(mapStateToProps)(ContentList);
