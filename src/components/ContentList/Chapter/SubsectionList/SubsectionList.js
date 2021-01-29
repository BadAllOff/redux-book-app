import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import Subsection from "./Subsection";

const SubsectionList = ({ chapter, subsections, addSubsection }) => {
  return (
    <>
      <SubsectionForm chapterId={chapter._id} addSubsection={addSubsection} />
      <ul>
        {subsections &&
          subsections.map((subsection) => (
            <Subsection
              key={subsection._id}
              chapterId={subsection._parent_id}
              subsectionId={subsection._id}
            />
          ))}
      </ul>
    </>
  );
};

export default SubsectionList;

const SubsectionForm = ({ chapterId, addSubsection }) => {
  return (
    <fieldset className="border p-2">
      <legend className="w-auto">Add new subsection</legend>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          addSubsection(chapterId, e.target.title.value);
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
