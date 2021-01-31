import React, { useState } from "react";
import { Form, Button, Modal, Col, Row } from "react-bootstrap";

const Subsection = ({
  chapterId,
  subsection,
  toggleSubsectionReady,
  deleteSubsection,
  editSubsection,
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
      <ModalEdit
        subsection={subsection}
        editSubsection={editSubsection}
      ></ModalEdit>
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

const ModalEdit = ({ subsection, editSubsection }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button size="sm" variant="outline-success" onClick={handleShow}>
        Edit subsection
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit subsection </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <fieldset className="border p-2">
            <legend className="w-auto">Edit Subsection</legend>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                editSubsection(subsection._id, { title: e.target.title.value });
                e.target.title.value = "";
              }}
            >
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      size="lg"
                      type="text"
                      name="title"
                      defaultValue={subsection.title}
                    />
                    <Form.Text className="text-muted">
                      enter the new title of subsection
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Row>
              <Button variant="primary" type="submit" onClick={handleClose}>
                Save Changes
              </Button>
            </Form>
          </fieldset>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
