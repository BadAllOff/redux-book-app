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
      <button
        className="btn btn-outline"
        onClick={() => deleteSubsection(subsection._id)}
      >
        Delete subsection
      </button>
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
      <button className="btn btn-outline" onClick={handleShow}>
        Edit subsection
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit subsection </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <fieldset className="border p-2">
            <legend className="w-auto">Edit Subsection</legend>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                editSubsection(subsection._id, { title: e.target.title.value });
                e.target.title.value = "";
              }}
            >
              <div className="form-group">
                <label className="form-label">Title</label>
                <input
                  name="title"
                  type="text"
                  className="form-control form-control-lg"
                  defaultValue={subsection.title}
                />
                <small className="text-muted form-text">
                  enter the new title of subsection
                </small>
              </div>
              <button className="btn btn-outline" onClick={handleClose}>
                Save Changes
              </button>
            </form>
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
