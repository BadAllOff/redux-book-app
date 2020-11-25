import React from "react";
import { Form } from "react-bootstrap";

const Subsection = ({ chapterId, subsection, toggleSubsectionReady }) => {
  return (
    <li>
      <h6>{subsection.title}</h6>
      <Form.Group controlId={["readySubsection", chapterId, subsection._id].join("_")}>
        <Form.Check
          onChange={() => toggleSubsectionReady(chapterId, subsection._id)}
          type="checkbox"
          label="Mark as ready"
          name="ready"
          checked={subsection.ready}
        />
      </Form.Group>
    </li>
  );
};

export default Subsection;
