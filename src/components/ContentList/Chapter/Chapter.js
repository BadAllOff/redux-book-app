import React, { useState } from "react";
import { Form, Button, Modal, Row, Col } from "react-bootstrap";
import SubsectionList from "./SubsectionList/";

const Chapter = ({ chapter, toggleReady, deleteChapter, editChapter }) => {
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
      <ModalEdit chapter={chapter} editChapter={editChapter}></ModalEdit>
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

const ModalEdit = ({ chapter, editChapter }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button size="sm" variant="outline-success" onClick={handleShow}>
        Edit chapter
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit chapter </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <fieldset className="border p-2">
            <legend className="w-auto">Add new chapter</legend>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                editChapter(chapter._id, { title: e.target.title.value });
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
                      defaultValue={chapter.title}
                    />
                    <Form.Text className="text-muted">
                      enter the new title of chapter
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
