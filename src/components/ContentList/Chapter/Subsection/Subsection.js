import React from "react";
import { Form } from "react-bootstrap";

const Subsection = ({ idx, subSection, toggleSubSectionReady }) => {
  return (
    <li>
      <h6>{subSection.title}</h6>
      <Form.Group controlId={["readySubsection", idx, subSection.id].join("_")}>
        <Form.Check
          onChange={() => toggleSubSectionReady(idx, subSection.id)}
          type="checkbox"
          label="Mark as ready"
          name="ready"
          checked={subSection.ready}
        />
      </Form.Group>
    </li>
  );
};

export default Subsection;
