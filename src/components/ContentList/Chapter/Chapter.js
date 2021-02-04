import React, { useRef } from "react";
import MyModal from "../../Modal/Modal";
import SubsectionList from "./SubsectionList/";
import Filter from "../../Filter";

const Chapter = ({ chapter, toggleReady, deleteChapter, editChapter }) => {
  const modal = useRef(null);
  const { textColor, message } = chapter.ready
    ? { textColor: "text-success", message: "ready" }
    : { textColor: "text-fail", message: "not ready" };
  return (
    <>
      <h1>
        {chapter.title} {<span className={textColor}>({message})</span>}
      </h1>
      <ReadyCheckInput onChange={toggleReady} chapter={chapter}/>
      <Filter />
      <hr />
      <button
        className="btn btn-outline"
        onClick={() => deleteChapter(chapter._id)}
      >
        Delete chapter
      </button>
      <button className="btn btn-outline" onClick={() => modal.current.open()}>
        Edit chapter
      </button>
      <MyModal ref={modal}>
        <ModalEdit chapter={chapter} editChapter={editChapter}></ModalEdit>
      </MyModal>

      <SubsectionList chapter={chapter} />
    </>
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

const ReadyCheckInput = ({ chapter, onChange }) => {
  return (
    <div className="form-group">
      <div className="form-check">
        <input
          onChange={() => onChange(chapter._id)}
          name="ready"
          type="checkbox"
          id={["ready", chapter._id].join("_")}
          className="form-check-input"
          defaultValue={chapter.ready}
          checked={chapter.ready}
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
  );
};
