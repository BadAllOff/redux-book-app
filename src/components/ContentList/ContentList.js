import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import Chapter from "./Chapter";

const ContentList = ({ chapters, addChapter }) => {
  return (
    <>
      <ul>
        {chapters &&
          chapters.map((chapter, idx) => (
            <Chapter key={idx} chapter={chapter} idx={idx} />
          ))}
      </ul>
      <ChapterForm addChapter={addChapter} />
    </>
  );
};

export default ContentList;

const ChapterForm = ({ addChapter }) => {
  return (
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
  );
};
