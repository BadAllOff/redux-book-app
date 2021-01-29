import React from "react";
import { Form } from "react-bootstrap";
import SubsectionList from "./SubsectionList/";

const Chapter = ({ chapter, toggleReady }) => {
  return (
    <li>
      <h4>{chapter.title}</h4>
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
        <SubsectionList subsections={chapter.subsections} chapter={chapter} />
      </ul>
    </li>
  );
};

export default Chapter;
