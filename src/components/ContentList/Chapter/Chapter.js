import React, { useRef } from "react";
import MyModal from "../../Modal/Modal";
import SubsectionList from "./SubsectionList/";
import { Link } from "react-router-dom";

const Chapter = ({ chapter, toggleReady, deleteChapter, editChapter }) => {
  const modal = useRef(null);

  return (
    <li>
      <h4>{chapter.title}</h4>
      <Link to={`/chapters/${chapter._id}`}>
        <button className="btn btn-outline">Preview</button>
      </Link>
      <button
        className="btn btn-outline"
        onClick={() => deleteChapter(chapter._id)}
      >
        Delete chapter
      </button>
      <button className="btn btn-outline" onClick={() => modal.current.open()}>
        Open Modal
      </button>
      <MyModal ref={modal}>
        <ModalEdit chapter={chapter} editChapter={editChapter}></ModalEdit>
      </MyModal>
      <div className="form-group">
        <div className="form-check">
          <input
            onChange={() => toggleReady(chapter._id)}
            name="ready"
            type="checkbox"
            id={["ready", chapter._id].join("_")}
            className="form-check-input"
          />
          <label
            title=""
            htmlFor={["ready", chapter._id].join("_")}
            className="form-check-label"
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
  return (
    <fieldset>
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
              <label className="form-label">
                Write in new title for chapter
              </label>
              <input
                name="title"
                type="text"
                className="form-control form-control-lg"
                defaultValue={chapter.title}
              />
              <small className="text-muted form-text">
                enter the new title of chapter
              </small>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-outline">
          Save Changes
        </button>
      </form>
    </fieldset>
  );
};
