import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import Subsection from "./Subsection";

const Chapter = ({
  chap,
  idx,
  toggleReady,
  addSubsection,
}) => {
  return (
    <>
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
        <SubsectionForm idx={idx} addSubsection={addSubsection} />
        <ul>
          {chap.subsections &&
            chap.subsections.map((subSection, sectionIdx) => (
              <Subsection
                idx={idx}
                subSection={subSection}
                sectionIdx={sectionIdx}
              />
            ))}
        </ul>
      </li>
    </>
  );
};

export default Chapter;

const SubsectionForm = ({ idx, addSubsection }) => {
  return (
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
  );
};
