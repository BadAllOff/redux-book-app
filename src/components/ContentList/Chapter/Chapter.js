import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import SubsectionList from "./SubsectionList/";
import { Link } from "react-router-dom";

const Chapter = ({ chapter, toggleReady, deleteChapter, editChapter }) => {
  return (
    <li>
      <h4>{chapter.title}</h4>
      <Link to={`/chapters/${chapter._id}`}>preview</Link>
      <button
        class="btn btn-outline-danger btn-sm"
        onClick={() => deleteChapter(chapter._id)}
      >
        Delete chapter
      </button>
      <ModalEdit chapter={chapter} editChapter={editChapter}></ModalEdit>
      <div class="form-group">
        <div class="form-check">
          <input
            onChange={() => toggleReady(chapter._id)}
            name="ready"
            type="checkbox"
            id={["ready", chapter._id].join("_")}
            class="form-check-input"
          />
          <label
            title=""
            for={["ready", chapter._id].join("_")}
            class="form-check-label"
          >
            Mark as ready
          </label>
        </div>
      </div>
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
      <button className="btn btn-outline-success btn-sm" onClick={handleShow}>
        Edit chapter
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit chapter </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <fieldset className="border p-2">
            <legend className="w-auto">Add new chapter</legend>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                editChapter(chapter._id, { title: e.target.title.value });
                e.target.title.value = "";
              }}
            >
              <div>
                <div>
                  <div className="form-group">
                    <label className="form-label">Edit Chapter</label>
                    <input
                      name="title"
                      type="text"
                      className="form-control form-control-lg"
                      value={chapter.title}
                    ></input>
                    <small className="text-muted form-text">
                      enter the new title of chapter
                    </small>
                  </div>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">
                Save Changes
              </button>
            </form>
          </fieldset>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" class="btn btn-secondary">
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
