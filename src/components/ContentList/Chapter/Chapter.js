import React from "react";
import { Form, Button } from "react-bootstrap";
import SubsectionList from "./SubsectionList/";

const Chapter = ({ chapter, toggleReady, deleteChapter }) => {
  return (
    <li>
      <h4>{chapter.title}</h4>
      <Button
        size="sm"
        variant="outline-danger"
        onClick={() => deleteChapter(chapter._id)}
      >
        Delete chapter
      </Button>
      <Form.Group controlId={["ready", chapter._id].join("_")}>
        <Form.Check
          onChange={() => toggleReady(chapter._id)}
          type="checkbox"
          label="Mark as ready"
          name="ready"
          checked={chapter.ready}
        />
      </Form.Group>
      <ul>
        <SubsectionList chapter={chapter} />
      </ul>
    </li>
  );
};

export default Chapter;
