import React from "react";
import { Form } from "react-bootstrap";

const Subsection = ({ idx, subSection, sectionIdx, toggleSubSectionReady }) => {
  return (
    <li>
      <h2>{subSection.title}</h2>
      <Form.Group controlId={["readySubsection", idx, sectionIdx].join("_")}>
        <Form.Check
          onChange={() => toggleSubSectionReady(idx, sectionIdx)}
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
