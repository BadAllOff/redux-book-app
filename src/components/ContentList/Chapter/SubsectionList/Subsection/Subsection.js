import React from "react";
import { Form, Button } from "react-bootstrap";

const Subsection = ({
  chapterId,
  subsection,
  toggleSubsectionReady,
  deleteSubsection,
}) => {
  return (
    <li>
      <h6>{subsection.title}</h6>
      <Button
        size="sm"
        variant="outline-danger"
        onClick={() => deleteSubsection(subsection._id)}
      >
        Delete subsection
      </Button>
      <Form.Group
        controlId={["readySubsection", chapterId, subsection._id].join("_")}
      >
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
